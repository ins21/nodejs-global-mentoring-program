import 'regenerator-runtime/runtime';

import { mockGroupsDb, mockGroup } from './mocks';
import { getGroups } from '../app/routers/groups/getGroups';
import { createGroup } from '../app/routers/groups/createGroup';
import { getGroupById } from '../app/routers/groups/getGroupById';
import { updateGroup } from '../app/routers/groups/updateGroup';
import { deleteGroup } from '../app/routers/groups/deleteGroup';

jest.mock('../app/services/groupService.js', () => {
  return {
    __esModule: true,
    groupService: {
      getGroups: jest.fn(),
      createGroup: jest.fn(),
      getGroupById: jest.fn(),
      updateGroup: jest.fn(),
      deleteGroup: jest.fn()
    }
  };
});

describe('Groups controller', () => {
  const mockgroupService = jest.requireMock('../app/services/groupService.js').groupService;

  it('Function "getGroups" must return groups array', async () => {
    mockgroupService.getGroups.mockResolvedValue(mockGroupsDb);

    const mockJson = jest.fn();
    const mockReq = {};
    const mockRes = { json: mockJson };

    await getGroups(mockReq, mockRes);

    expect(mockJson).toBeCalledWith(mockGroupsDb);
  });

  it('Function "getGroups" must call function "next" if an error was catched', async () => {
    mockgroupService.getGroups.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = {};
    const mockRes = {};

    await getGroups(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "getGroupById" must return 404 status if group was not found ', async () => {
    mockgroupService.getGroupById.mockResolvedValue(undefined);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockEnd = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson, status: mockStatus, end: mockEnd };

    await getGroupById(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(404);
    expect(mockEnd).toBeCalled();
  });

  it('Function "getGroupById" must return group`s data if it was found', async () => {
    mockgroupService.getGroupById.mockResolvedValue(mockGroup);

    const mockJson = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson };

    await getGroupById(mockReq, mockRes);

    expect(mockJson).toBeCalledWith(mockGroup);
  });

  it('Function "getGroupById" must call function "next" if an error was catched', async () => {
    mockgroupService.getGroupById.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = {};

    await getGroupById(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "createGroup" must return 201 status and new group`s data', async () => {
    mockgroupService.createGroup.mockResolvedValue(mockGroup);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockReq = { body: mockGroup };
    const mockRes = { json: mockJson, status: mockStatus };

    await createGroup(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(201);
    expect(mockJson).toBeCalledWith(mockGroup);
  });

  it('Function "createGroup" must call function "next" if an error was catched', async () => {
    mockgroupService.createGroup.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { body: mockGroup };
    const mockRes = {};

    await createGroup(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "updateGroup" must return 404 status if group was not found ', async () => {
    mockgroupService.getGroupById.mockResolvedValue(undefined);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockEnd = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson, status: mockStatus, end: mockEnd };

    await updateGroup(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(404);
    expect(mockEnd).toBeCalled();
  });

  it('Function "updateGroup" must update data if group was found', async () => {
    mockgroupService.getGroupById.mockResolvedValue(mockGroupsDb[0]);
    mockgroupService.updateGroup.mockResolvedValue(mockGroup);

    const mockJson = jest.fn();
    const mockEnd = jest.fn();
    const mockReq = { body: mockGroup, params: { id: '123' } };
    const mockRes = { json: mockJson, end: mockEnd };

    await updateGroup(mockReq, mockRes);

    expect(mockEnd).toBeCalled();
    expect(mockgroupService.updateGroup).toBeCalledWith('123', mockGroup);
  });

  it('Function "updateGroup" must call function "next" if an error was catched', async () => {
    mockgroupService.updateGroup.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = {};

    await updateGroup(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });

  it('Function "deleteGroup" must return 404 status if group was not found ', async () => {
    mockgroupService.getGroupById.mockResolvedValue(undefined);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnThis();
    const mockEnd = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = { json: mockJson, status: mockStatus, end: mockEnd };

    await deleteGroup(mockReq, mockRes);

    expect(mockStatus).toBeCalledWith(404);
    expect(mockEnd).toBeCalled();
  });

  it('Function "deleteGroup" must delete data if group was found', async () => {
    mockgroupService.getGroupById.mockResolvedValue(mockGroupsDb[0]);
    mockgroupService.deleteGroup.mockResolvedValue();

    const mockJson = jest.fn();
    const mockEnd = jest.fn();
    const mockReq = { body: mockGroup, params: { id: '123' } };
    const mockRes = { json: mockJson, end: mockEnd };

    await deleteGroup(mockReq, mockRes);

    expect(mockEnd).toBeCalled();
    expect(mockgroupService.deleteGroup).toBeCalledWith('123');
  });

  it('Function "deleteGroup" must call function "next" if an error was catched', async () => {
    mockgroupService.deleteGroup.mockRejectedValue('mockError');

    const mockNext = jest.fn();
    const mockReq = { params: { id: '1' } };
    const mockRes = {};

    await deleteGroup(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalledWith('mockError');
  });
});
