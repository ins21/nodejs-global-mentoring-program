import 'regenerator-runtime/runtime';

import { mockUsersDb, mockUser } from './mocks';
import { getUsers } from '../app/routers/users/getUsers';
import { createUser } from '../app/routers/users/createUser';
import { getUserById } from '../app/routers/users/getUserById';
import { updateUser } from '../app/routers/users/updateUser';
import { deleteUser } from '../app/routers/users/deleteUser';

jest.mock('../app/services/userService.js', () => {
  return {
    __esModule: true,
    userService: {
      getUsers: jest.fn(),
      createUser: jest.fn(),
      getUserById: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn()
    }
  };
});

describe('Users controller', () => {
  const mockUserService = jest.requireMock('../app/services/userService.js').userService;

  it('Function "getUsers" must return users array', async () => {
    mockUserService.getUsers.mockResolvedValue(mockUsersDb);

    const mockJson = jest.fn();
    const mockReq = {};
    const mockRes = { json: mockJson };

    await getUsers(mockReq, mockRes);

    expect(mockJson).toBeCalledWith(mockUsersDb);
  });

  it('Function "getUsers" must call function "next" if an error was catched', async () => {
    mockUserService.getUsers.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = {};
    const mockRes = {};

    await getUsers(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "getUserById" must return 404 status if user was not found ', async () => {
    mockUserService.getUserById.mockResolvedValue(undefined);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockEnd = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson, status: mockStatus, end: mockEnd };

    await getUserById(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(404);
    expect(mockEnd).toBeCalled();
  });

  it('Function "getUserById" must return user`s data if it was found', async () => {
    mockUserService.getUserById.mockResolvedValue(mockUser);

    const mockJson = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson };

    await getUserById(mockReq, mockRes);

    expect(mockJson).toBeCalledWith(mockUser);
  });

  it('Function "getUserById" must call function "next" if an error was catched', async () => {
    mockUserService.getUserById.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = {};

    await getUserById(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "createUser" must return 201 status and new user`s data', async () => {
    mockUserService.createUser.mockResolvedValue(mockUser);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockReq = { body: mockUser };
    const mockRes = { json: mockJson, status: mockStatus };

    await createUser(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(201);
    expect(mockJson).toBeCalledWith(mockUser);
  });

  it('Function "createUser" must call function "next" if an error was catched', async () => {
    mockUserService.createUser.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { body: mockUser };
    const mockRes = {};

    await createUser(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "updateUser" must return 404 status if user was not found ', async () => {
    mockUserService.getUserById.mockResolvedValue(undefined);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockEnd = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson, status: mockStatus, end: mockEnd };

    await updateUser(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(404);
    expect(mockEnd).toBeCalled();
  });

  it('Function "updateUser" must update data if user was found', async () => {
    mockUserService.getUserById.mockResolvedValue(mockUsersDb[0]);
    mockUserService.updateUser.mockResolvedValue(mockUser);

    const mockJson = jest.fn();
    const mockEnd = jest.fn();
    const mockReq = { body: mockUser, params: { id: '123' } };
    const mockRes = { json: mockJson, end: mockEnd };

    await updateUser(mockReq, mockRes);

    expect(mockEnd).toBeCalled();
    expect(mockUserService.updateUser).toBeCalledWith('123', mockUser);
  });

  it('Function "updateUser" must call function "next" if an error was catched', async () => {
    mockUserService.updateUser.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = {};

    await updateUser(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "deleteUser" must return 404 status if user was not found ', async () => {
    mockUserService.getUserById.mockResolvedValue(undefined);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockEnd = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson, status: mockStatus, end: mockEnd };

    await deleteUser(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(404);
    expect(mockEnd).toBeCalled();
  });

  it('Function "deleteUser" must delete data if user was found', async () => {
    mockUserService.getUserById.mockResolvedValue(mockUsersDb[0]);
    mockUserService.deleteUser.mockResolvedValue();

    const mockJson = jest.fn();
    const mockEnd = jest.fn();
    const mockReq = { body: mockUser, params: { id: '123' } };
    const mockRes = { json: mockJson, end: mockEnd };

    await deleteUser(mockReq, mockRes);

    expect(mockEnd).toBeCalled();
    expect(mockUserService.deleteUser).toBeCalledWith('123');
  });

  it('Function "deleteUser" must call function "next" if an error was catched', async () => {
    mockUserService.deleteUser.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = {};

    await deleteUser(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });
});
