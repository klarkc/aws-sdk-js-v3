"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1GetSkillGroupCommand =
  exports.serializeAws_json1_1GetRoomSkillParameterCommand =
  exports.serializeAws_json1_1GetRoomCommand =
  exports.serializeAws_json1_1GetProfileCommand =
  exports.serializeAws_json1_1GetNetworkProfileCommand =
  exports.serializeAws_json1_1GetInvitationConfigurationCommand =
  exports.serializeAws_json1_1GetGatewayGroupCommand =
  exports.serializeAws_json1_1GetGatewayCommand =
  exports.serializeAws_json1_1GetDeviceCommand =
  exports.serializeAws_json1_1GetContactCommand =
  exports.serializeAws_json1_1GetConferenceProviderCommand =
  exports.serializeAws_json1_1GetConferencePreferenceCommand =
  exports.serializeAws_json1_1GetAddressBookCommand =
  exports.serializeAws_json1_1ForgetSmartHomeAppliancesCommand =
  exports.serializeAws_json1_1DisassociateSkillGroupFromRoomCommand =
  exports.serializeAws_json1_1DisassociateSkillFromUsersCommand =
  exports.serializeAws_json1_1DisassociateSkillFromSkillGroupCommand =
  exports.serializeAws_json1_1DisassociateDeviceFromRoomCommand =
  exports.serializeAws_json1_1DisassociateContactFromAddressBookCommand =
  exports.serializeAws_json1_1DeleteUserCommand =
  exports.serializeAws_json1_1DeleteSkillGroupCommand =
  exports.serializeAws_json1_1DeleteSkillAuthorizationCommand =
  exports.serializeAws_json1_1DeleteRoomSkillParameterCommand =
  exports.serializeAws_json1_1DeleteRoomCommand =
  exports.serializeAws_json1_1DeleteProfileCommand =
  exports.serializeAws_json1_1DeleteNetworkProfileCommand =
  exports.serializeAws_json1_1DeleteGatewayGroupCommand =
  exports.serializeAws_json1_1DeleteDeviceUsageDataCommand =
  exports.serializeAws_json1_1DeleteDeviceCommand =
  exports.serializeAws_json1_1DeleteContactCommand =
  exports.serializeAws_json1_1DeleteConferenceProviderCommand =
  exports.serializeAws_json1_1DeleteBusinessReportScheduleCommand =
  exports.serializeAws_json1_1DeleteAddressBookCommand =
  exports.serializeAws_json1_1CreateUserCommand =
  exports.serializeAws_json1_1CreateSkillGroupCommand =
  exports.serializeAws_json1_1CreateRoomCommand =
  exports.serializeAws_json1_1CreateProfileCommand =
  exports.serializeAws_json1_1CreateNetworkProfileCommand =
  exports.serializeAws_json1_1CreateGatewayGroupCommand =
  exports.serializeAws_json1_1CreateContactCommand =
  exports.serializeAws_json1_1CreateConferenceProviderCommand =
  exports.serializeAws_json1_1CreateBusinessReportScheduleCommand =
  exports.serializeAws_json1_1CreateAddressBookCommand =
  exports.serializeAws_json1_1AssociateSkillWithUsersCommand =
  exports.serializeAws_json1_1AssociateSkillWithSkillGroupCommand =
  exports.serializeAws_json1_1AssociateSkillGroupWithRoomCommand =
  exports.serializeAws_json1_1AssociateDeviceWithRoomCommand =
  exports.serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand =
  exports.serializeAws_json1_1AssociateContactWithAddressBookCommand =
  exports.serializeAws_json1_1ApproveSkillCommand =
    void 0;
exports.deserializeAws_json1_1AssociateSkillWithUsersCommand =
  exports.deserializeAws_json1_1AssociateSkillWithSkillGroupCommand =
  exports.deserializeAws_json1_1AssociateSkillGroupWithRoomCommand =
  exports.deserializeAws_json1_1AssociateDeviceWithRoomCommand =
  exports.deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand =
  exports.deserializeAws_json1_1AssociateContactWithAddressBookCommand =
  exports.deserializeAws_json1_1ApproveSkillCommand =
  exports.serializeAws_json1_1UpdateSkillGroupCommand =
  exports.serializeAws_json1_1UpdateRoomCommand =
  exports.serializeAws_json1_1UpdateProfileCommand =
  exports.serializeAws_json1_1UpdateNetworkProfileCommand =
  exports.serializeAws_json1_1UpdateGatewayGroupCommand =
  exports.serializeAws_json1_1UpdateGatewayCommand =
  exports.serializeAws_json1_1UpdateDeviceCommand =
  exports.serializeAws_json1_1UpdateContactCommand =
  exports.serializeAws_json1_1UpdateConferenceProviderCommand =
  exports.serializeAws_json1_1UpdateBusinessReportScheduleCommand =
  exports.serializeAws_json1_1UpdateAddressBookCommand =
  exports.serializeAws_json1_1UntagResourceCommand =
  exports.serializeAws_json1_1TagResourceCommand =
  exports.serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand =
  exports.serializeAws_json1_1StartDeviceSyncCommand =
  exports.serializeAws_json1_1SendInvitationCommand =
  exports.serializeAws_json1_1SendAnnouncementCommand =
  exports.serializeAws_json1_1SearchUsersCommand =
  exports.serializeAws_json1_1SearchSkillGroupsCommand =
  exports.serializeAws_json1_1SearchRoomsCommand =
  exports.serializeAws_json1_1SearchProfilesCommand =
  exports.serializeAws_json1_1SearchNetworkProfilesCommand =
  exports.serializeAws_json1_1SearchDevicesCommand =
  exports.serializeAws_json1_1SearchContactsCommand =
  exports.serializeAws_json1_1SearchAddressBooksCommand =
  exports.serializeAws_json1_1RevokeInvitationCommand =
  exports.serializeAws_json1_1ResolveRoomCommand =
  exports.serializeAws_json1_1RejectSkillCommand =
  exports.serializeAws_json1_1RegisterAVSDeviceCommand =
  exports.serializeAws_json1_1PutSkillAuthorizationCommand =
  exports.serializeAws_json1_1PutRoomSkillParameterCommand =
  exports.serializeAws_json1_1PutInvitationConfigurationCommand =
  exports.serializeAws_json1_1PutConferencePreferenceCommand =
  exports.serializeAws_json1_1ListTagsCommand =
  exports.serializeAws_json1_1ListSmartHomeAppliancesCommand =
  exports.serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand =
  exports.serializeAws_json1_1ListSkillsStoreCategoriesCommand =
  exports.serializeAws_json1_1ListSkillsCommand =
  exports.serializeAws_json1_1ListGatewaysCommand =
  exports.serializeAws_json1_1ListGatewayGroupsCommand =
  exports.serializeAws_json1_1ListDeviceEventsCommand =
  exports.serializeAws_json1_1ListConferenceProvidersCommand =
  exports.serializeAws_json1_1ListBusinessReportSchedulesCommand =
    void 0;
exports.deserializeAws_json1_1ListSkillsStoreCategoriesCommand =
  exports.deserializeAws_json1_1ListSkillsCommand =
  exports.deserializeAws_json1_1ListGatewaysCommand =
  exports.deserializeAws_json1_1ListGatewayGroupsCommand =
  exports.deserializeAws_json1_1ListDeviceEventsCommand =
  exports.deserializeAws_json1_1ListConferenceProvidersCommand =
  exports.deserializeAws_json1_1ListBusinessReportSchedulesCommand =
  exports.deserializeAws_json1_1GetSkillGroupCommand =
  exports.deserializeAws_json1_1GetRoomSkillParameterCommand =
  exports.deserializeAws_json1_1GetRoomCommand =
  exports.deserializeAws_json1_1GetProfileCommand =
  exports.deserializeAws_json1_1GetNetworkProfileCommand =
  exports.deserializeAws_json1_1GetInvitationConfigurationCommand =
  exports.deserializeAws_json1_1GetGatewayGroupCommand =
  exports.deserializeAws_json1_1GetGatewayCommand =
  exports.deserializeAws_json1_1GetDeviceCommand =
  exports.deserializeAws_json1_1GetContactCommand =
  exports.deserializeAws_json1_1GetConferenceProviderCommand =
  exports.deserializeAws_json1_1GetConferencePreferenceCommand =
  exports.deserializeAws_json1_1GetAddressBookCommand =
  exports.deserializeAws_json1_1ForgetSmartHomeAppliancesCommand =
  exports.deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand =
  exports.deserializeAws_json1_1DisassociateSkillFromUsersCommand =
  exports.deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand =
  exports.deserializeAws_json1_1DisassociateDeviceFromRoomCommand =
  exports.deserializeAws_json1_1DisassociateContactFromAddressBookCommand =
  exports.deserializeAws_json1_1DeleteUserCommand =
  exports.deserializeAws_json1_1DeleteSkillGroupCommand =
  exports.deserializeAws_json1_1DeleteSkillAuthorizationCommand =
  exports.deserializeAws_json1_1DeleteRoomSkillParameterCommand =
  exports.deserializeAws_json1_1DeleteRoomCommand =
  exports.deserializeAws_json1_1DeleteProfileCommand =
  exports.deserializeAws_json1_1DeleteNetworkProfileCommand =
  exports.deserializeAws_json1_1DeleteGatewayGroupCommand =
  exports.deserializeAws_json1_1DeleteDeviceUsageDataCommand =
  exports.deserializeAws_json1_1DeleteDeviceCommand =
  exports.deserializeAws_json1_1DeleteContactCommand =
  exports.deserializeAws_json1_1DeleteConferenceProviderCommand =
  exports.deserializeAws_json1_1DeleteBusinessReportScheduleCommand =
  exports.deserializeAws_json1_1DeleteAddressBookCommand =
  exports.deserializeAws_json1_1CreateUserCommand =
  exports.deserializeAws_json1_1CreateSkillGroupCommand =
  exports.deserializeAws_json1_1CreateRoomCommand =
  exports.deserializeAws_json1_1CreateProfileCommand =
  exports.deserializeAws_json1_1CreateNetworkProfileCommand =
  exports.deserializeAws_json1_1CreateGatewayGroupCommand =
  exports.deserializeAws_json1_1CreateContactCommand =
  exports.deserializeAws_json1_1CreateConferenceProviderCommand =
  exports.deserializeAws_json1_1CreateBusinessReportScheduleCommand =
  exports.deserializeAws_json1_1CreateAddressBookCommand =
    void 0;
exports.deserializeAws_json1_1UpdateSkillGroupCommand =
  exports.deserializeAws_json1_1UpdateRoomCommand =
  exports.deserializeAws_json1_1UpdateProfileCommand =
  exports.deserializeAws_json1_1UpdateNetworkProfileCommand =
  exports.deserializeAws_json1_1UpdateGatewayGroupCommand =
  exports.deserializeAws_json1_1UpdateGatewayCommand =
  exports.deserializeAws_json1_1UpdateDeviceCommand =
  exports.deserializeAws_json1_1UpdateContactCommand =
  exports.deserializeAws_json1_1UpdateConferenceProviderCommand =
  exports.deserializeAws_json1_1UpdateBusinessReportScheduleCommand =
  exports.deserializeAws_json1_1UpdateAddressBookCommand =
  exports.deserializeAws_json1_1UntagResourceCommand =
  exports.deserializeAws_json1_1TagResourceCommand =
  exports.deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand =
  exports.deserializeAws_json1_1StartDeviceSyncCommand =
  exports.deserializeAws_json1_1SendInvitationCommand =
  exports.deserializeAws_json1_1SendAnnouncementCommand =
  exports.deserializeAws_json1_1SearchUsersCommand =
  exports.deserializeAws_json1_1SearchSkillGroupsCommand =
  exports.deserializeAws_json1_1SearchRoomsCommand =
  exports.deserializeAws_json1_1SearchProfilesCommand =
  exports.deserializeAws_json1_1SearchNetworkProfilesCommand =
  exports.deserializeAws_json1_1SearchDevicesCommand =
  exports.deserializeAws_json1_1SearchContactsCommand =
  exports.deserializeAws_json1_1SearchAddressBooksCommand =
  exports.deserializeAws_json1_1RevokeInvitationCommand =
  exports.deserializeAws_json1_1ResolveRoomCommand =
  exports.deserializeAws_json1_1RejectSkillCommand =
  exports.deserializeAws_json1_1RegisterAVSDeviceCommand =
  exports.deserializeAws_json1_1PutSkillAuthorizationCommand =
  exports.deserializeAws_json1_1PutRoomSkillParameterCommand =
  exports.deserializeAws_json1_1PutInvitationConfigurationCommand =
  exports.deserializeAws_json1_1PutConferencePreferenceCommand =
  exports.deserializeAws_json1_1ListTagsCommand =
  exports.deserializeAws_json1_1ListSmartHomeAppliancesCommand =
  exports.deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1ApproveSkillCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ApproveSkill",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ApproveSkillRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ApproveSkillCommand = serializeAws_json1_1ApproveSkillCommand;
const serializeAws_json1_1AssociateContactWithAddressBookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateContactWithAddressBook",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateContactWithAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateContactWithAddressBookCommand =
  serializeAws_json1_1AssociateContactWithAddressBookCommand;
const serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateDeviceWithNetworkProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand =
  serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand;
const serializeAws_json1_1AssociateDeviceWithRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateDeviceWithRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateDeviceWithRoomCommand = serializeAws_json1_1AssociateDeviceWithRoomCommand;
const serializeAws_json1_1AssociateSkillGroupWithRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateSkillGroupWithRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateSkillGroupWithRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateSkillGroupWithRoomCommand = serializeAws_json1_1AssociateSkillGroupWithRoomCommand;
const serializeAws_json1_1AssociateSkillWithSkillGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateSkillWithSkillGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateSkillWithSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateSkillWithSkillGroupCommand =
  serializeAws_json1_1AssociateSkillWithSkillGroupCommand;
const serializeAws_json1_1AssociateSkillWithUsersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateSkillWithUsers",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateSkillWithUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateSkillWithUsersCommand = serializeAws_json1_1AssociateSkillWithUsersCommand;
const serializeAws_json1_1CreateAddressBookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateAddressBook",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAddressBookCommand = serializeAws_json1_1CreateAddressBookCommand;
const serializeAws_json1_1CreateBusinessReportScheduleCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateBusinessReportSchedule",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBusinessReportScheduleCommand =
  serializeAws_json1_1CreateBusinessReportScheduleCommand;
const serializeAws_json1_1CreateConferenceProviderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateConferenceProvider",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConferenceProviderCommand = serializeAws_json1_1CreateConferenceProviderCommand;
const serializeAws_json1_1CreateContactCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateContact",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContactCommand = serializeAws_json1_1CreateContactCommand;
const serializeAws_json1_1CreateGatewayGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateGatewayGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGatewayGroupCommand = serializeAws_json1_1CreateGatewayGroupCommand;
const serializeAws_json1_1CreateNetworkProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateNetworkProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateNetworkProfileCommand = serializeAws_json1_1CreateNetworkProfileCommand;
const serializeAws_json1_1CreateProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProfileCommand = serializeAws_json1_1CreateProfileCommand;
const serializeAws_json1_1CreateRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRoomCommand = serializeAws_json1_1CreateRoomCommand;
const serializeAws_json1_1CreateSkillGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateSkillGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSkillGroupCommand = serializeAws_json1_1CreateSkillGroupCommand;
const serializeAws_json1_1CreateUserCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateUser",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
const serializeAws_json1_1DeleteAddressBookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteAddressBook",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAddressBookCommand = serializeAws_json1_1DeleteAddressBookCommand;
const serializeAws_json1_1DeleteBusinessReportScheduleCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteBusinessReportSchedule",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBusinessReportScheduleCommand =
  serializeAws_json1_1DeleteBusinessReportScheduleCommand;
const serializeAws_json1_1DeleteConferenceProviderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteConferenceProvider",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConferenceProviderCommand = serializeAws_json1_1DeleteConferenceProviderCommand;
const serializeAws_json1_1DeleteContactCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteContact",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContactCommand = serializeAws_json1_1DeleteContactCommand;
const serializeAws_json1_1DeleteDeviceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteDevice",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDeviceCommand = serializeAws_json1_1DeleteDeviceCommand;
const serializeAws_json1_1DeleteDeviceUsageDataCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteDeviceUsageData",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteDeviceUsageDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDeviceUsageDataCommand = serializeAws_json1_1DeleteDeviceUsageDataCommand;
const serializeAws_json1_1DeleteGatewayGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteGatewayGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGatewayGroupCommand = serializeAws_json1_1DeleteGatewayGroupCommand;
const serializeAws_json1_1DeleteNetworkProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteNetworkProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNetworkProfileCommand = serializeAws_json1_1DeleteNetworkProfileCommand;
const serializeAws_json1_1DeleteProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProfileCommand = serializeAws_json1_1DeleteProfileCommand;
const serializeAws_json1_1DeleteRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRoomCommand = serializeAws_json1_1DeleteRoomCommand;
const serializeAws_json1_1DeleteRoomSkillParameterCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteRoomSkillParameter",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRoomSkillParameterCommand = serializeAws_json1_1DeleteRoomSkillParameterCommand;
const serializeAws_json1_1DeleteSkillAuthorizationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteSkillAuthorization",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteSkillAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSkillAuthorizationCommand = serializeAws_json1_1DeleteSkillAuthorizationCommand;
const serializeAws_json1_1DeleteSkillGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteSkillGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSkillGroupCommand = serializeAws_json1_1DeleteSkillGroupCommand;
const serializeAws_json1_1DeleteUserCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteUser",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
const serializeAws_json1_1DisassociateContactFromAddressBookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateContactFromAddressBook",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateContactFromAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateContactFromAddressBookCommand =
  serializeAws_json1_1DisassociateContactFromAddressBookCommand;
const serializeAws_json1_1DisassociateDeviceFromRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateDeviceFromRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateDeviceFromRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateDeviceFromRoomCommand = serializeAws_json1_1DisassociateDeviceFromRoomCommand;
const serializeAws_json1_1DisassociateSkillFromSkillGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateSkillFromSkillGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateSkillFromSkillGroupCommand =
  serializeAws_json1_1DisassociateSkillFromSkillGroupCommand;
const serializeAws_json1_1DisassociateSkillFromUsersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateSkillFromUsers",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateSkillFromUsersCommand = serializeAws_json1_1DisassociateSkillFromUsersCommand;
const serializeAws_json1_1DisassociateSkillGroupFromRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateSkillGroupFromRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateSkillGroupFromRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateSkillGroupFromRoomCommand =
  serializeAws_json1_1DisassociateSkillGroupFromRoomCommand;
const serializeAws_json1_1ForgetSmartHomeAppliancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ForgetSmartHomeAppliances",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ForgetSmartHomeAppliancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ForgetSmartHomeAppliancesCommand = serializeAws_json1_1ForgetSmartHomeAppliancesCommand;
const serializeAws_json1_1GetAddressBookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetAddressBook",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAddressBookCommand = serializeAws_json1_1GetAddressBookCommand;
const serializeAws_json1_1GetConferencePreferenceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetConferencePreference",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetConferencePreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConferencePreferenceCommand = serializeAws_json1_1GetConferencePreferenceCommand;
const serializeAws_json1_1GetConferenceProviderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetConferenceProvider",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConferenceProviderCommand = serializeAws_json1_1GetConferenceProviderCommand;
const serializeAws_json1_1GetContactCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetContact",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContactCommand = serializeAws_json1_1GetContactCommand;
const serializeAws_json1_1GetDeviceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetDevice",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeviceCommand = serializeAws_json1_1GetDeviceCommand;
const serializeAws_json1_1GetGatewayCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetGateway",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetGatewayCommand = serializeAws_json1_1GetGatewayCommand;
const serializeAws_json1_1GetGatewayGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetGatewayGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetGatewayGroupCommand = serializeAws_json1_1GetGatewayGroupCommand;
const serializeAws_json1_1GetInvitationConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetInvitationConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetInvitationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInvitationConfigurationCommand = serializeAws_json1_1GetInvitationConfigurationCommand;
const serializeAws_json1_1GetNetworkProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetNetworkProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetNetworkProfileCommand = serializeAws_json1_1GetNetworkProfileCommand;
const serializeAws_json1_1GetProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetProfileCommand = serializeAws_json1_1GetProfileCommand;
const serializeAws_json1_1GetRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRoomCommand = serializeAws_json1_1GetRoomCommand;
const serializeAws_json1_1GetRoomSkillParameterCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetRoomSkillParameter",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRoomSkillParameterCommand = serializeAws_json1_1GetRoomSkillParameterCommand;
const serializeAws_json1_1GetSkillGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetSkillGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSkillGroupCommand = serializeAws_json1_1GetSkillGroupCommand;
const serializeAws_json1_1ListBusinessReportSchedulesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListBusinessReportSchedules",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListBusinessReportSchedulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBusinessReportSchedulesCommand = serializeAws_json1_1ListBusinessReportSchedulesCommand;
const serializeAws_json1_1ListConferenceProvidersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListConferenceProviders",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListConferenceProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListConferenceProvidersCommand = serializeAws_json1_1ListConferenceProvidersCommand;
const serializeAws_json1_1ListDeviceEventsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListDeviceEvents",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListDeviceEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeviceEventsCommand = serializeAws_json1_1ListDeviceEventsCommand;
const serializeAws_json1_1ListGatewayGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListGatewayGroups",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListGatewayGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGatewayGroupsCommand = serializeAws_json1_1ListGatewayGroupsCommand;
const serializeAws_json1_1ListGatewaysCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListGateways",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListGatewaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGatewaysCommand = serializeAws_json1_1ListGatewaysCommand;
const serializeAws_json1_1ListSkillsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSkills",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListSkillsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSkillsCommand = serializeAws_json1_1ListSkillsCommand;
const serializeAws_json1_1ListSkillsStoreCategoriesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSkillsStoreCategories",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListSkillsStoreCategoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSkillsStoreCategoriesCommand = serializeAws_json1_1ListSkillsStoreCategoriesCommand;
const serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSkillsStoreSkillsByCategory",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand =
  serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand;
const serializeAws_json1_1ListSmartHomeAppliancesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSmartHomeAppliances",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListSmartHomeAppliancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSmartHomeAppliancesCommand = serializeAws_json1_1ListSmartHomeAppliancesCommand;
const serializeAws_json1_1ListTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListTags",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
const serializeAws_json1_1PutConferencePreferenceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutConferencePreference",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutConferencePreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutConferencePreferenceCommand = serializeAws_json1_1PutConferencePreferenceCommand;
const serializeAws_json1_1PutInvitationConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutInvitationConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutInvitationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutInvitationConfigurationCommand = serializeAws_json1_1PutInvitationConfigurationCommand;
const serializeAws_json1_1PutRoomSkillParameterCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutRoomSkillParameter",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRoomSkillParameterCommand = serializeAws_json1_1PutRoomSkillParameterCommand;
const serializeAws_json1_1PutSkillAuthorizationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutSkillAuthorization",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutSkillAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutSkillAuthorizationCommand = serializeAws_json1_1PutSkillAuthorizationCommand;
const serializeAws_json1_1RegisterAVSDeviceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.RegisterAVSDevice",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RegisterAVSDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterAVSDeviceCommand = serializeAws_json1_1RegisterAVSDeviceCommand;
const serializeAws_json1_1RejectSkillCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.RejectSkill",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RejectSkillRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectSkillCommand = serializeAws_json1_1RejectSkillCommand;
const serializeAws_json1_1ResolveRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ResolveRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ResolveRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResolveRoomCommand = serializeAws_json1_1ResolveRoomCommand;
const serializeAws_json1_1RevokeInvitationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.RevokeInvitation",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RevokeInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RevokeInvitationCommand = serializeAws_json1_1RevokeInvitationCommand;
const serializeAws_json1_1SearchAddressBooksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchAddressBooks",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchAddressBooksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchAddressBooksCommand = serializeAws_json1_1SearchAddressBooksCommand;
const serializeAws_json1_1SearchContactsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchContacts",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchContactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchContactsCommand = serializeAws_json1_1SearchContactsCommand;
const serializeAws_json1_1SearchDevicesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchDevices",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchDevicesCommand = serializeAws_json1_1SearchDevicesCommand;
const serializeAws_json1_1SearchNetworkProfilesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchNetworkProfiles",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchNetworkProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchNetworkProfilesCommand = serializeAws_json1_1SearchNetworkProfilesCommand;
const serializeAws_json1_1SearchProfilesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchProfiles",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchProfilesCommand = serializeAws_json1_1SearchProfilesCommand;
const serializeAws_json1_1SearchRoomsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchRooms",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchRoomsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchRoomsCommand = serializeAws_json1_1SearchRoomsCommand;
const serializeAws_json1_1SearchSkillGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchSkillGroups",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchSkillGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchSkillGroupsCommand = serializeAws_json1_1SearchSkillGroupsCommand;
const serializeAws_json1_1SearchUsersCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchUsers",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SearchUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchUsersCommand = serializeAws_json1_1SearchUsersCommand;
const serializeAws_json1_1SendAnnouncementCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SendAnnouncement",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SendAnnouncementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendAnnouncementCommand = serializeAws_json1_1SendAnnouncementCommand;
const serializeAws_json1_1SendInvitationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SendInvitation",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1SendInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendInvitationCommand = serializeAws_json1_1SendInvitationCommand;
const serializeAws_json1_1StartDeviceSyncCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.StartDeviceSync",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartDeviceSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartDeviceSyncCommand = serializeAws_json1_1StartDeviceSyncCommand;
const serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.StartSmartHomeApplianceDiscovery",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand =
  serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.TagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UntagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAddressBookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateAddressBook",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAddressBookCommand = serializeAws_json1_1UpdateAddressBookCommand;
const serializeAws_json1_1UpdateBusinessReportScheduleCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateBusinessReportSchedule",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBusinessReportScheduleCommand =
  serializeAws_json1_1UpdateBusinessReportScheduleCommand;
const serializeAws_json1_1UpdateConferenceProviderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateConferenceProvider",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConferenceProviderCommand = serializeAws_json1_1UpdateConferenceProviderCommand;
const serializeAws_json1_1UpdateContactCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateContact",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateContactCommand = serializeAws_json1_1UpdateContactCommand;
const serializeAws_json1_1UpdateDeviceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateDevice",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDeviceCommand = serializeAws_json1_1UpdateDeviceCommand;
const serializeAws_json1_1UpdateGatewayCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateGateway",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGatewayCommand = serializeAws_json1_1UpdateGatewayCommand;
const serializeAws_json1_1UpdateGatewayGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateGatewayGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGatewayGroupCommand = serializeAws_json1_1UpdateGatewayGroupCommand;
const serializeAws_json1_1UpdateNetworkProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateNetworkProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateNetworkProfileCommand = serializeAws_json1_1UpdateNetworkProfileCommand;
const serializeAws_json1_1UpdateProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateProfile",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProfileCommand = serializeAws_json1_1UpdateProfileCommand;
const serializeAws_json1_1UpdateRoomCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateRoom",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRoomCommand = serializeAws_json1_1UpdateRoomCommand;
const serializeAws_json1_1UpdateSkillGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateSkillGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSkillGroupCommand = serializeAws_json1_1UpdateSkillGroupCommand;
const deserializeAws_json1_1ApproveSkillCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ApproveSkillCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ApproveSkillResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ApproveSkillCommand = deserializeAws_json1_1ApproveSkillCommand;
const deserializeAws_json1_1ApproveSkillCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateContactWithAddressBookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateContactWithAddressBookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateContactWithAddressBookResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateContactWithAddressBookCommand =
  deserializeAws_json1_1AssociateContactWithAddressBookCommand;
const deserializeAws_json1_1AssociateContactWithAddressBookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand =
  deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand;
const deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateDeviceWithRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDeviceWithRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateDeviceWithRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateDeviceWithRoomCommand = deserializeAws_json1_1AssociateDeviceWithRoomCommand;
const deserializeAws_json1_1AssociateDeviceWithRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateSkillGroupWithRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateSkillGroupWithRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateSkillGroupWithRoomCommand =
  deserializeAws_json1_1AssociateSkillGroupWithRoomCommand;
const deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateSkillWithSkillGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateSkillWithSkillGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateSkillWithSkillGroupCommand =
  deserializeAws_json1_1AssociateSkillWithSkillGroupCommand;
const deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SkillNotLinkedException":
    case "com.amazonaws.alexaforbusiness#SkillNotLinkedException":
      response = {
        ...(await deserializeAws_json1_1SkillNotLinkedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateSkillWithUsersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateSkillWithUsersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateSkillWithUsersResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateSkillWithUsersCommand = deserializeAws_json1_1AssociateSkillWithUsersCommand;
const deserializeAws_json1_1AssociateSkillWithUsersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAddressBookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAddressBookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateAddressBookResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAddressBookCommand = deserializeAws_json1_1CreateAddressBookCommand;
const deserializeAws_json1_1CreateAddressBookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateBusinessReportScheduleCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBusinessReportScheduleCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateBusinessReportScheduleResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBusinessReportScheduleCommand =
  deserializeAws_json1_1CreateBusinessReportScheduleCommand;
const deserializeAws_json1_1CreateBusinessReportScheduleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateConferenceProviderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConferenceProviderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateConferenceProviderResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConferenceProviderCommand = deserializeAws_json1_1CreateConferenceProviderCommand;
const deserializeAws_json1_1CreateConferenceProviderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateContactCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContactCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateContactResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContactCommand = deserializeAws_json1_1CreateContactCommand;
const deserializeAws_json1_1CreateContactCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateGatewayGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGatewayGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateGatewayGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGatewayGroupCommand = deserializeAws_json1_1CreateGatewayGroupCommand;
const deserializeAws_json1_1CreateGatewayGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateNetworkProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNetworkProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateNetworkProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateNetworkProfileCommand = deserializeAws_json1_1CreateNetworkProfileCommand;
const deserializeAws_json1_1CreateNetworkProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceLinkedRoleStateException":
    case "com.amazonaws.alexaforbusiness#InvalidServiceLinkedRoleStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProfileCommand = deserializeAws_json1_1CreateProfileCommand;
const deserializeAws_json1_1CreateProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRoomCommand = deserializeAws_json1_1CreateRoomCommand;
const deserializeAws_json1_1CreateRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSkillGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSkillGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateSkillGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSkillGroupCommand = deserializeAws_json1_1CreateSkillGroupCommand;
const deserializeAws_json1_1CreateSkillGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateUserCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserCommand = deserializeAws_json1_1CreateUserCommand;
const deserializeAws_json1_1CreateUserCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.alexaforbusiness#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAddressBookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAddressBookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteAddressBookResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAddressBookCommand = deserializeAws_json1_1DeleteAddressBookCommand;
const deserializeAws_json1_1DeleteAddressBookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteBusinessReportScheduleCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBusinessReportScheduleCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteBusinessReportScheduleResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBusinessReportScheduleCommand =
  deserializeAws_json1_1DeleteBusinessReportScheduleCommand;
const deserializeAws_json1_1DeleteBusinessReportScheduleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteConferenceProviderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConferenceProviderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteConferenceProviderResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConferenceProviderCommand = deserializeAws_json1_1DeleteConferenceProviderCommand;
const deserializeAws_json1_1DeleteConferenceProviderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteContactCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContactCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteContactResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContactCommand = deserializeAws_json1_1DeleteContactCommand;
const deserializeAws_json1_1DeleteContactCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDeviceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeviceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteDeviceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDeviceCommand = deserializeAws_json1_1DeleteDeviceCommand;
const deserializeAws_json1_1DeleteDeviceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDeviceUsageDataCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeviceUsageDataCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteDeviceUsageDataResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDeviceUsageDataCommand = deserializeAws_json1_1DeleteDeviceUsageDataCommand;
const deserializeAws_json1_1DeleteDeviceUsageDataCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteGatewayGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGatewayGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteGatewayGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGatewayGroupCommand = deserializeAws_json1_1DeleteGatewayGroupCommand;
const deserializeAws_json1_1DeleteGatewayGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceAssociatedException":
    case "com.amazonaws.alexaforbusiness#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteNetworkProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteNetworkProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNetworkProfileCommand = deserializeAws_json1_1DeleteNetworkProfileCommand;
const deserializeAws_json1_1DeleteNetworkProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.alexaforbusiness#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProfileCommand = deserializeAws_json1_1DeleteProfileCommand;
const deserializeAws_json1_1DeleteProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRoomCommand = deserializeAws_json1_1DeleteRoomCommand;
const deserializeAws_json1_1DeleteRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRoomSkillParameterCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRoomSkillParameterCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteRoomSkillParameterResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRoomSkillParameterCommand = deserializeAws_json1_1DeleteRoomSkillParameterCommand;
const deserializeAws_json1_1DeleteRoomSkillParameterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSkillAuthorizationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSkillAuthorizationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteSkillAuthorizationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSkillAuthorizationCommand = deserializeAws_json1_1DeleteSkillAuthorizationCommand;
const deserializeAws_json1_1DeleteSkillAuthorizationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSkillGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSkillGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteSkillGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSkillGroupCommand = deserializeAws_json1_1DeleteSkillGroupCommand;
const deserializeAws_json1_1DeleteSkillGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteUserCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteUserResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
const deserializeAws_json1_1DeleteUserCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateContactFromAddressBookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateContactFromAddressBookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateContactFromAddressBookResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateContactFromAddressBookCommand =
  deserializeAws_json1_1DisassociateContactFromAddressBookCommand;
const deserializeAws_json1_1DisassociateContactFromAddressBookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateDeviceFromRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDeviceFromRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateDeviceFromRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateDeviceFromRoomCommand =
  deserializeAws_json1_1DisassociateDeviceFromRoomCommand;
const deserializeAws_json1_1DisassociateDeviceFromRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand =
  deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand;
const deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateSkillFromUsersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateSkillFromUsersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateSkillFromUsersResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateSkillFromUsersCommand =
  deserializeAws_json1_1DisassociateSkillFromUsersCommand;
const deserializeAws_json1_1DisassociateSkillFromUsersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand =
  deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand;
const deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ForgetSmartHomeAppliancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ForgetSmartHomeAppliancesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ForgetSmartHomeAppliancesCommand = deserializeAws_json1_1ForgetSmartHomeAppliancesCommand;
const deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAddressBookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAddressBookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetAddressBookResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAddressBookCommand = deserializeAws_json1_1GetAddressBookCommand;
const deserializeAws_json1_1GetAddressBookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetConferencePreferenceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConferencePreferenceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetConferencePreferenceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConferencePreferenceCommand = deserializeAws_json1_1GetConferencePreferenceCommand;
const deserializeAws_json1_1GetConferencePreferenceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetConferenceProviderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConferenceProviderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetConferenceProviderResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConferenceProviderCommand = deserializeAws_json1_1GetConferenceProviderCommand;
const deserializeAws_json1_1GetConferenceProviderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetContactCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetContactResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContactCommand = deserializeAws_json1_1GetContactCommand;
const deserializeAws_json1_1GetContactCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDeviceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeviceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetDeviceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeviceCommand = deserializeAws_json1_1GetDeviceCommand;
const deserializeAws_json1_1GetDeviceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetGatewayCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGatewayCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetGatewayResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetGatewayCommand = deserializeAws_json1_1GetGatewayCommand;
const deserializeAws_json1_1GetGatewayCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetGatewayGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGatewayGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetGatewayGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetGatewayGroupCommand = deserializeAws_json1_1GetGatewayGroupCommand;
const deserializeAws_json1_1GetGatewayGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetInvitationConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInvitationConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetInvitationConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInvitationConfigurationCommand =
  deserializeAws_json1_1GetInvitationConfigurationCommand;
const deserializeAws_json1_1GetInvitationConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetNetworkProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetNetworkProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetNetworkProfileCommand = deserializeAws_json1_1GetNetworkProfileCommand;
const deserializeAws_json1_1GetNetworkProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSecretsManagerResourceException":
    case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetProfileCommand = deserializeAws_json1_1GetProfileCommand;
const deserializeAws_json1_1GetProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRoomCommand = deserializeAws_json1_1GetRoomCommand;
const deserializeAws_json1_1GetRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRoomSkillParameterCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRoomSkillParameterCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetRoomSkillParameterResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRoomSkillParameterCommand = deserializeAws_json1_1GetRoomSkillParameterCommand;
const deserializeAws_json1_1GetRoomSkillParameterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSkillGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSkillGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetSkillGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSkillGroupCommand = deserializeAws_json1_1GetSkillGroupCommand;
const deserializeAws_json1_1GetSkillGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListBusinessReportSchedulesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBusinessReportSchedulesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListBusinessReportSchedulesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBusinessReportSchedulesCommand =
  deserializeAws_json1_1ListBusinessReportSchedulesCommand;
const deserializeAws_json1_1ListBusinessReportSchedulesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListConferenceProvidersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConferenceProvidersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListConferenceProvidersResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListConferenceProvidersCommand = deserializeAws_json1_1ListConferenceProvidersCommand;
const deserializeAws_json1_1ListConferenceProvidersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDeviceEventsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeviceEventsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListDeviceEventsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeviceEventsCommand = deserializeAws_json1_1ListDeviceEventsCommand;
const deserializeAws_json1_1ListDeviceEventsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListGatewayGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGatewayGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListGatewayGroupsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGatewayGroupsCommand = deserializeAws_json1_1ListGatewayGroupsCommand;
const deserializeAws_json1_1ListGatewayGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListGatewaysCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGatewaysCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListGatewaysResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGatewaysCommand = deserializeAws_json1_1ListGatewaysCommand;
const deserializeAws_json1_1ListGatewaysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSkillsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSkillsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListSkillsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSkillsCommand = deserializeAws_json1_1ListSkillsCommand;
const deserializeAws_json1_1ListSkillsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSkillsStoreCategoriesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSkillsStoreCategoriesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListSkillsStoreCategoriesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSkillsStoreCategoriesCommand = deserializeAws_json1_1ListSkillsStoreCategoriesCommand;
const deserializeAws_json1_1ListSkillsStoreCategoriesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand =
  deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand;
const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSmartHomeAppliancesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSmartHomeAppliancesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListSmartHomeAppliancesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSmartHomeAppliancesCommand = deserializeAws_json1_1ListSmartHomeAppliancesCommand;
const deserializeAws_json1_1ListSmartHomeAppliancesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
const deserializeAws_json1_1ListTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutConferencePreferenceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutConferencePreferenceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1PutConferencePreferenceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutConferencePreferenceCommand = deserializeAws_json1_1PutConferencePreferenceCommand;
const deserializeAws_json1_1PutConferencePreferenceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutInvitationConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInvitationConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1PutInvitationConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutInvitationConfigurationCommand =
  deserializeAws_json1_1PutInvitationConfigurationCommand;
const deserializeAws_json1_1PutInvitationConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutRoomSkillParameterCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRoomSkillParameterCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1PutRoomSkillParameterResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRoomSkillParameterCommand = deserializeAws_json1_1PutRoomSkillParameterCommand;
const deserializeAws_json1_1PutRoomSkillParameterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutSkillAuthorizationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutSkillAuthorizationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1PutSkillAuthorizationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutSkillAuthorizationCommand = deserializeAws_json1_1PutSkillAuthorizationCommand;
const deserializeAws_json1_1PutSkillAuthorizationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.alexaforbusiness#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterAVSDeviceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterAVSDeviceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1RegisterAVSDeviceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterAVSDeviceCommand = deserializeAws_json1_1RegisterAVSDeviceCommand;
const deserializeAws_json1_1RegisterAVSDeviceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeviceException":
    case "com.amazonaws.alexaforbusiness#InvalidDeviceException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeviceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RejectSkillCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectSkillCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1RejectSkillResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectSkillCommand = deserializeAws_json1_1RejectSkillCommand;
const deserializeAws_json1_1RejectSkillCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ResolveRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResolveRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ResolveRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResolveRoomCommand = deserializeAws_json1_1ResolveRoomCommand;
const deserializeAws_json1_1ResolveRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RevokeInvitationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokeInvitationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1RevokeInvitationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RevokeInvitationCommand = deserializeAws_json1_1RevokeInvitationCommand;
const deserializeAws_json1_1RevokeInvitationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchAddressBooksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchAddressBooksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchAddressBooksResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchAddressBooksCommand = deserializeAws_json1_1SearchAddressBooksCommand;
const deserializeAws_json1_1SearchAddressBooksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchContactsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchContactsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchContactsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchContactsCommand = deserializeAws_json1_1SearchContactsCommand;
const deserializeAws_json1_1SearchContactsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchDevicesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchDevicesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchDevicesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchDevicesCommand = deserializeAws_json1_1SearchDevicesCommand;
const deserializeAws_json1_1SearchDevicesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchNetworkProfilesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchNetworkProfilesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchNetworkProfilesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchNetworkProfilesCommand = deserializeAws_json1_1SearchNetworkProfilesCommand;
const deserializeAws_json1_1SearchNetworkProfilesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchProfilesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchProfilesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchProfilesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchProfilesCommand = deserializeAws_json1_1SearchProfilesCommand;
const deserializeAws_json1_1SearchProfilesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchRoomsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchRoomsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchRoomsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchRoomsCommand = deserializeAws_json1_1SearchRoomsCommand;
const deserializeAws_json1_1SearchRoomsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchSkillGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchSkillGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchSkillGroupsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchSkillGroupsCommand = deserializeAws_json1_1SearchSkillGroupsCommand;
const deserializeAws_json1_1SearchSkillGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchUsersCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchUsersCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SearchUsersResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchUsersCommand = deserializeAws_json1_1SearchUsersCommand;
const deserializeAws_json1_1SearchUsersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SendAnnouncementCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendAnnouncementCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SendAnnouncementResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendAnnouncementCommand = deserializeAws_json1_1SendAnnouncementCommand;
const deserializeAws_json1_1SendAnnouncementCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SendInvitationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendInvitationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1SendInvitationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendInvitationCommand = deserializeAws_json1_1SendInvitationCommand;
const deserializeAws_json1_1SendInvitationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidUserStatusException":
    case "com.amazonaws.alexaforbusiness#InvalidUserStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidUserStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartDeviceSyncCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDeviceSyncCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartDeviceSyncResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartDeviceSyncCommand = deserializeAws_json1_1StartDeviceSyncCommand;
const deserializeAws_json1_1StartDeviceSyncCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand =
  deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand;
const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAddressBookCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAddressBookCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateAddressBookResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAddressBookCommand = deserializeAws_json1_1UpdateAddressBookCommand;
const deserializeAws_json1_1UpdateAddressBookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateBusinessReportScheduleCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBusinessReportScheduleCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateBusinessReportScheduleResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBusinessReportScheduleCommand =
  deserializeAws_json1_1UpdateBusinessReportScheduleCommand;
const deserializeAws_json1_1UpdateBusinessReportScheduleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateConferenceProviderCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConferenceProviderCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateConferenceProviderResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConferenceProviderCommand = deserializeAws_json1_1UpdateConferenceProviderCommand;
const deserializeAws_json1_1UpdateConferenceProviderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateContactCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContactCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateContactResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateContactCommand = deserializeAws_json1_1UpdateContactCommand;
const deserializeAws_json1_1UpdateContactCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDeviceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDeviceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateDeviceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDeviceCommand = deserializeAws_json1_1UpdateDeviceCommand;
const deserializeAws_json1_1UpdateDeviceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateGatewayCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGatewayCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateGatewayResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGatewayCommand = deserializeAws_json1_1UpdateGatewayCommand;
const deserializeAws_json1_1UpdateGatewayCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateGatewayGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGatewayGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateGatewayGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGatewayGroupCommand = deserializeAws_json1_1UpdateGatewayGroupCommand;
const deserializeAws_json1_1UpdateGatewayGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateNetworkProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateNetworkProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateNetworkProfileCommand = deserializeAws_json1_1UpdateNetworkProfileCommand;
const deserializeAws_json1_1UpdateNetworkProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSecretsManagerResourceException":
    case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateProfileCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProfileCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateProfileResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProfileCommand = deserializeAws_json1_1UpdateProfileCommand;
const deserializeAws_json1_1UpdateProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateRoomCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRoomCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateRoomResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRoomCommand = deserializeAws_json1_1UpdateRoomCommand;
const deserializeAws_json1_1UpdateRoomCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSkillGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSkillGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateSkillGroupResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSkillGroupCommand = deserializeAws_json1_1UpdateSkillGroupCommand;
const deserializeAws_json1_1UpdateSkillGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
  const contents = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1DeviceNotRegisteredExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1DeviceNotRegisteredException(body, context);
  const contents = {
    name: "DeviceNotRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidCertificateAuthorityException(body, context);
  const contents = {
    name: "InvalidCertificateAuthorityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidDeviceExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidDeviceException(body, context);
  const contents = {
    name: "InvalidDeviceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidSecretsManagerResourceException(body, context);
  const contents = {
    name: "InvalidSecretsManagerResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidServiceLinkedRoleStateException(body, context);
  const contents = {
    name: "InvalidServiceLinkedRoleStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidUserStatusExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidUserStatusException(body, context);
  const contents = {
    name: "InvalidUserStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
  const contents = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1NameInUseExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1NameInUseException(body, context);
  const contents = {
    name: "NameInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1NotFoundException(body, context);
  const contents = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceAssociatedException(body, context);
  const contents = {
    name: "ResourceAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1SkillNotLinkedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1SkillNotLinkedException(body, context);
  const contents = {
    name: "SkillNotLinkedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1UnauthorizedException(body, context);
  const contents = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_1ApproveSkillRequest = (input, context) => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1AssociateContactWithAddressBookRequest = (input, context) => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};
const serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};
const serializeAws_json1_1AssociateDeviceWithRoomRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1AssociateSkillGroupWithRoomRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};
const serializeAws_json1_1AssociateSkillWithSkillGroupRequest = (input, context) => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1AssociateSkillWithUsersRequest = (input, context) => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1Audio = (input, context) => {
  return {
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};
const serializeAws_json1_1AudioList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Audio(entry, context);
    });
};
const serializeAws_json1_1AuthorizationResult = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_json1_1BusinessReportContentRange = (input, context) => {
  return {
    ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
  };
};
const serializeAws_json1_1BusinessReportRecurrence = (input, context) => {
  return {
    ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
  };
};
const serializeAws_json1_1ConferencePreference = (input, context) => {
  return {
    ...(input.DefaultConferenceProviderArn !== undefined &&
      input.DefaultConferenceProviderArn !== null && {
        DefaultConferenceProviderArn: input.DefaultConferenceProviderArn,
      }),
  };
};
const serializeAws_json1_1Content = (input, context) => {
  return {
    ...(input.AudioList !== undefined &&
      input.AudioList !== null && { AudioList: serializeAws_json1_1AudioList(input.AudioList, context) }),
    ...(input.SsmlList !== undefined &&
      input.SsmlList !== null && { SsmlList: serializeAws_json1_1SsmlList(input.SsmlList, context) }),
    ...(input.TextList !== undefined &&
      input.TextList !== null && { TextList: serializeAws_json1_1TextList(input.TextList, context) }),
  };
};
const serializeAws_json1_1CreateAddressBookRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateBusinessReportScheduleRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.ContentRange !== undefined &&
      input.ContentRange !== null && {
        ContentRange: serializeAws_json1_1BusinessReportContentRange(input.ContentRange, context),
      }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.Recurrence !== undefined &&
      input.Recurrence !== null && {
        Recurrence: serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context),
      }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.ScheduleName !== undefined && input.ScheduleName !== null && { ScheduleName: input.ScheduleName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateConferenceProviderRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.ConferenceProviderName !== undefined &&
      input.ConferenceProviderName !== null && { ConferenceProviderName: input.ConferenceProviderName }),
    ...(input.ConferenceProviderType !== undefined &&
      input.ConferenceProviderType !== null && { ConferenceProviderType: input.ConferenceProviderType }),
    ...(input.IPDialIn !== undefined &&
      input.IPDialIn !== null && { IPDialIn: serializeAws_json1_1IPDialIn(input.IPDialIn, context) }),
    ...(input.MeetingSetting !== undefined &&
      input.MeetingSetting !== null && {
        MeetingSetting: serializeAws_json1_1MeetingSetting(input.MeetingSetting, context),
      }),
    ...(input.PSTNDialIn !== undefined &&
      input.PSTNDialIn !== null && { PSTNDialIn: serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateContactRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumbers !== undefined &&
      input.PhoneNumbers !== null && {
        PhoneNumbers: serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context),
      }),
    ...(input.SipAddresses !== undefined &&
      input.SipAddresses !== null && { SipAddresses: serializeAws_json1_1SipAddressList(input.SipAddresses, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateEndOfMeetingReminder = (input, context) => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReminderAtMinutes !== undefined &&
      input.ReminderAtMinutes !== null && {
        ReminderAtMinutes: serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
      }),
    ...(input.ReminderType !== undefined && input.ReminderType !== null && { ReminderType: input.ReminderType }),
  };
};
const serializeAws_json1_1CreateGatewayGroupRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateInstantBooking = (input, context) => {
  return {
    ...(input.DurationInMinutes !== undefined &&
      input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};
const serializeAws_json1_1CreateMeetingRoomConfiguration = (input, context) => {
  return {
    ...(input.EndOfMeetingReminder !== undefined &&
      input.EndOfMeetingReminder !== null && {
        EndOfMeetingReminder: serializeAws_json1_1CreateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
      }),
    ...(input.InstantBooking !== undefined &&
      input.InstantBooking !== null && {
        InstantBooking: serializeAws_json1_1CreateInstantBooking(input.InstantBooking, context),
      }),
    ...(input.RequireCheckIn !== undefined &&
      input.RequireCheckIn !== null && {
        RequireCheckIn: serializeAws_json1_1CreateRequireCheckIn(input.RequireCheckIn, context),
      }),
    ...(input.RoomUtilizationMetricsEnabled !== undefined &&
      input.RoomUtilizationMetricsEnabled !== null && {
        RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
      }),
  };
};
const serializeAws_json1_1CreateNetworkProfileRequest = (input, context) => {
  var _a;
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.CurrentPassword !== undefined &&
      input.CurrentPassword !== null && { CurrentPassword: input.CurrentPassword }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EapMethod !== undefined && input.EapMethod !== null && { EapMethod: input.EapMethod }),
    ...(input.NetworkProfileName !== undefined &&
      input.NetworkProfileName !== null && { NetworkProfileName: input.NetworkProfileName }),
    ...(input.NextPassword !== undefined && input.NextPassword !== null && { NextPassword: input.NextPassword }),
    ...(input.SecurityType !== undefined && input.SecurityType !== null && { SecurityType: input.SecurityType }),
    ...(input.Ssid !== undefined && input.Ssid !== null && { Ssid: input.Ssid }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TrustAnchors !== undefined &&
      input.TrustAnchors !== null && {
        TrustAnchors: serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context),
      }),
  };
};
const serializeAws_json1_1CreateProfileRequest = (input, context) => {
  var _a;
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.DataRetentionOptIn !== undefined &&
      input.DataRetentionOptIn !== null && { DataRetentionOptIn: input.DataRetentionOptIn }),
    ...(input.DistanceUnit !== undefined && input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }),
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.MaxVolumeLimit !== undefined &&
      input.MaxVolumeLimit !== null && { MaxVolumeLimit: input.MaxVolumeLimit }),
    ...(input.MeetingRoomConfiguration !== undefined &&
      input.MeetingRoomConfiguration !== null && {
        MeetingRoomConfiguration: serializeAws_json1_1CreateMeetingRoomConfiguration(
          input.MeetingRoomConfiguration,
          context
        ),
      }),
    ...(input.PSTNEnabled !== undefined && input.PSTNEnabled !== null && { PSTNEnabled: input.PSTNEnabled }),
    ...(input.ProfileName !== undefined && input.ProfileName !== null && { ProfileName: input.ProfileName }),
    ...(input.SetupModeDisabled !== undefined &&
      input.SetupModeDisabled !== null && { SetupModeDisabled: input.SetupModeDisabled }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TemperatureUnit !== undefined &&
      input.TemperatureUnit !== null && { TemperatureUnit: input.TemperatureUnit }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    ...(input.WakeWord !== undefined && input.WakeWord !== null && { WakeWord: input.WakeWord }),
  };
};
const serializeAws_json1_1CreateRequireCheckIn = (input, context) => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReleaseAfterMinutes !== undefined &&
      input.ReleaseAfterMinutes !== null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }),
  };
};
const serializeAws_json1_1CreateRoomRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
    ...(input.ProviderCalendarId !== undefined &&
      input.ProviderCalendarId !== null && { ProviderCalendarId: input.ProviderCalendarId }),
    ...(input.RoomName !== undefined && input.RoomName !== null && { RoomName: input.RoomName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateSkillGroupRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SkillGroupName !== undefined &&
      input.SkillGroupName !== null && { SkillGroupName: input.SkillGroupName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};
const serializeAws_json1_1DeleteAddressBookRequest = (input, context) => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
  };
};
const serializeAws_json1_1DeleteBusinessReportScheduleRequest = (input, context) => {
  return {
    ...(input.ScheduleArn !== undefined && input.ScheduleArn !== null && { ScheduleArn: input.ScheduleArn }),
  };
};
const serializeAws_json1_1DeleteConferenceProviderRequest = (input, context) => {
  return {
    ...(input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }),
  };
};
const serializeAws_json1_1DeleteContactRequest = (input, context) => {
  return {
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};
const serializeAws_json1_1DeleteDeviceRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
  };
};
const serializeAws_json1_1DeleteDeviceUsageDataRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.DeviceUsageType !== undefined &&
      input.DeviceUsageType !== null && { DeviceUsageType: input.DeviceUsageType }),
  };
};
const serializeAws_json1_1DeleteGatewayGroupRequest = (input, context) => {
  return {
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
  };
};
const serializeAws_json1_1DeleteNetworkProfileRequest = (input, context) => {
  return {
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};
const serializeAws_json1_1DeleteProfileRequest = (input, context) => {
  return {
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
  };
};
const serializeAws_json1_1DeleteRoomRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1DeleteRoomSkillParameterRequest = (input, context) => {
  return {
    ...(input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1DeleteSkillAuthorizationRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1DeleteSkillGroupRequest = (input, context) => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
  return {
    ...(input.EnrollmentId !== undefined && input.EnrollmentId !== null && { EnrollmentId: input.EnrollmentId }),
    ...(input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }),
  };
};
const serializeAws_json1_1DisassociateContactFromAddressBookRequest = (input, context) => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};
const serializeAws_json1_1DisassociateDeviceFromRoomRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
  };
};
const serializeAws_json1_1DisassociateSkillFromSkillGroupRequest = (input, context) => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1DisassociateSkillFromUsersRequest = (input, context) => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1DisassociateSkillGroupFromRoomRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};
const serializeAws_json1_1EndOfMeetingReminderMinutesList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1Features = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1Filter = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }),
  };
};
const serializeAws_json1_1FilterList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1FilterValueList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ForgetSmartHomeAppliancesRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1GetAddressBookRequest = (input, context) => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
  };
};
const serializeAws_json1_1GetConferencePreferenceRequest = (input, context) => {
  return {};
};
const serializeAws_json1_1GetConferenceProviderRequest = (input, context) => {
  return {
    ...(input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }),
  };
};
const serializeAws_json1_1GetContactRequest = (input, context) => {
  return {
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};
const serializeAws_json1_1GetDeviceRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
  };
};
const serializeAws_json1_1GetGatewayGroupRequest = (input, context) => {
  return {
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
  };
};
const serializeAws_json1_1GetGatewayRequest = (input, context) => {
  return {
    ...(input.GatewayArn !== undefined && input.GatewayArn !== null && { GatewayArn: input.GatewayArn }),
  };
};
const serializeAws_json1_1GetInvitationConfigurationRequest = (input, context) => {
  return {};
};
const serializeAws_json1_1GetNetworkProfileRequest = (input, context) => {
  return {
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};
const serializeAws_json1_1GetProfileRequest = (input, context) => {
  return {
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
  };
};
const serializeAws_json1_1GetRoomRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1GetRoomSkillParameterRequest = (input, context) => {
  return {
    ...(input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1GetSkillGroupRequest = (input, context) => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};
const serializeAws_json1_1IPDialIn = (input, context) => {
  return {
    ...(input.CommsProtocol !== undefined && input.CommsProtocol !== null && { CommsProtocol: input.CommsProtocol }),
    ...(input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }),
  };
};
const serializeAws_json1_1ListBusinessReportSchedulesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListConferenceProvidersRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListDeviceEventsRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListGatewayGroupsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListGatewaysRequest = (input, context) => {
  return {
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListSkillsRequest = (input, context) => {
  return {
    ...(input.EnablementType !== undefined &&
      input.EnablementType !== null && { EnablementType: input.EnablementType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillType !== undefined && input.SkillType !== null && { SkillType: input.SkillType }),
  };
};
const serializeAws_json1_1ListSkillsStoreCategoriesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest = (input, context) => {
  return {
    ...(input.CategoryId !== undefined && input.CategoryId !== null && { CategoryId: input.CategoryId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListSmartHomeAppliancesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1MeetingSetting = (input, context) => {
  return {
    ...(input.RequirePin !== undefined && input.RequirePin !== null && { RequirePin: input.RequirePin }),
  };
};
const serializeAws_json1_1PhoneNumber = (input, context) => {
  return {
    ...(input.Number !== undefined && input.Number !== null && { Number: input.Number }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_json1_1PhoneNumberList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1PhoneNumber(entry, context);
    });
};
const serializeAws_json1_1PSTNDialIn = (input, context) => {
  return {
    ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
    ...(input.OneClickIdDelay !== undefined &&
      input.OneClickIdDelay !== null && { OneClickIdDelay: input.OneClickIdDelay }),
    ...(input.OneClickPinDelay !== undefined &&
      input.OneClickPinDelay !== null && { OneClickPinDelay: input.OneClickPinDelay }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
  };
};
const serializeAws_json1_1PutConferencePreferenceRequest = (input, context) => {
  return {
    ...(input.ConferencePreference !== undefined &&
      input.ConferencePreference !== null && {
        ConferencePreference: serializeAws_json1_1ConferencePreference(input.ConferencePreference, context),
      }),
  };
};
const serializeAws_json1_1PutInvitationConfigurationRequest = (input, context) => {
  return {
    ...(input.ContactEmail !== undefined && input.ContactEmail !== null && { ContactEmail: input.ContactEmail }),
    ...(input.OrganizationName !== undefined &&
      input.OrganizationName !== null && { OrganizationName: input.OrganizationName }),
    ...(input.PrivateSkillIds !== undefined &&
      input.PrivateSkillIds !== null && {
        PrivateSkillIds: serializeAws_json1_1ShortSkillIdList(input.PrivateSkillIds, context),
      }),
  };
};
const serializeAws_json1_1PutRoomSkillParameterRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.RoomSkillParameter !== undefined &&
      input.RoomSkillParameter !== null && {
        RoomSkillParameter: serializeAws_json1_1RoomSkillParameter(input.RoomSkillParameter, context),
      }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1PutSkillAuthorizationRequest = (input, context) => {
  return {
    ...(input.AuthorizationResult !== undefined &&
      input.AuthorizationResult !== null && {
        AuthorizationResult: serializeAws_json1_1AuthorizationResult(input.AuthorizationResult, context),
      }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1RegisterAVSDeviceRequest = (input, context) => {
  return {
    ...(input.AmazonId !== undefined && input.AmazonId !== null && { AmazonId: input.AmazonId }),
    ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
    ...(input.DeviceSerialNumber !== undefined &&
      input.DeviceSerialNumber !== null && { DeviceSerialNumber: input.DeviceSerialNumber }),
    ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserCode !== undefined && input.UserCode !== null && { UserCode: input.UserCode }),
  };
};
const serializeAws_json1_1RejectSkillRequest = (input, context) => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};
const serializeAws_json1_1ResolveRoomRequest = (input, context) => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};
const serializeAws_json1_1RevokeInvitationRequest = (input, context) => {
  return {
    ...(input.EnrollmentId !== undefined && input.EnrollmentId !== null && { EnrollmentId: input.EnrollmentId }),
    ...(input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }),
  };
};
const serializeAws_json1_1RoomSkillParameter = (input, context) => {
  return {
    ...(input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }),
    ...(input.ParameterValue !== undefined &&
      input.ParameterValue !== null && { ParameterValue: input.ParameterValue }),
  };
};
const serializeAws_json1_1SearchAddressBooksRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchContactsRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchDevicesRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchNetworkProfilesRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchProfilesRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchRoomsRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchSkillGroupsRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SearchUsersRequest = (input, context) => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};
const serializeAws_json1_1SendAnnouncementRequest = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Content !== undefined &&
      input.Content !== null && { Content: serializeAws_json1_1Content(input.Content, context) }),
    ...(input.RoomFilters !== undefined &&
      input.RoomFilters !== null && { RoomFilters: serializeAws_json1_1FilterList(input.RoomFilters, context) }),
    ...(input.TimeToLiveInSeconds !== undefined &&
      input.TimeToLiveInSeconds !== null && { TimeToLiveInSeconds: input.TimeToLiveInSeconds }),
  };
};
const serializeAws_json1_1SendInvitationRequest = (input, context) => {
  return {
    ...(input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }),
  };
};
const serializeAws_json1_1ShortSkillIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1SipAddress = (input, context) => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  };
};
const serializeAws_json1_1SipAddressList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1SipAddress(entry, context);
    });
};
const serializeAws_json1_1Sort = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1SortList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Sort(entry, context);
    });
};
const serializeAws_json1_1Ssml = (input, context) => {
  return {
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1SsmlList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Ssml(entry, context);
    });
};
const serializeAws_json1_1StartDeviceSyncRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.Features !== undefined &&
      input.Features !== null && { Features: serializeAws_json1_1Features(input.Features, context) }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest = (input, context) => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};
const serializeAws_json1_1Tag = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1Text = (input, context) => {
  return {
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1TextList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Text(entry, context);
    });
};
const serializeAws_json1_1TrustAnchorList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};
const serializeAws_json1_1UpdateAddressBookRequest = (input, context) => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1UpdateBusinessReportScheduleRequest = (input, context) => {
  return {
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.Recurrence !== undefined &&
      input.Recurrence !== null && {
        Recurrence: serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context),
      }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.ScheduleArn !== undefined && input.ScheduleArn !== null && { ScheduleArn: input.ScheduleArn }),
    ...(input.ScheduleName !== undefined && input.ScheduleName !== null && { ScheduleName: input.ScheduleName }),
  };
};
const serializeAws_json1_1UpdateConferenceProviderRequest = (input, context) => {
  return {
    ...(input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }),
    ...(input.ConferenceProviderType !== undefined &&
      input.ConferenceProviderType !== null && { ConferenceProviderType: input.ConferenceProviderType }),
    ...(input.IPDialIn !== undefined &&
      input.IPDialIn !== null && { IPDialIn: serializeAws_json1_1IPDialIn(input.IPDialIn, context) }),
    ...(input.MeetingSetting !== undefined &&
      input.MeetingSetting !== null && {
        MeetingSetting: serializeAws_json1_1MeetingSetting(input.MeetingSetting, context),
      }),
    ...(input.PSTNDialIn !== undefined &&
      input.PSTNDialIn !== null && { PSTNDialIn: serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context) }),
  };
};
const serializeAws_json1_1UpdateContactRequest = (input, context) => {
  return {
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumbers !== undefined &&
      input.PhoneNumbers !== null && {
        PhoneNumbers: serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context),
      }),
    ...(input.SipAddresses !== undefined &&
      input.SipAddresses !== null && { SipAddresses: serializeAws_json1_1SipAddressList(input.SipAddresses, context) }),
  };
};
const serializeAws_json1_1UpdateDeviceRequest = (input, context) => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
  };
};
const serializeAws_json1_1UpdateEndOfMeetingReminder = (input, context) => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReminderAtMinutes !== undefined &&
      input.ReminderAtMinutes !== null && {
        ReminderAtMinutes: serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
      }),
    ...(input.ReminderType !== undefined && input.ReminderType !== null && { ReminderType: input.ReminderType }),
  };
};
const serializeAws_json1_1UpdateGatewayGroupRequest = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1UpdateGatewayRequest = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GatewayArn !== undefined && input.GatewayArn !== null && { GatewayArn: input.GatewayArn }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SoftwareVersion !== undefined &&
      input.SoftwareVersion !== null && { SoftwareVersion: input.SoftwareVersion }),
  };
};
const serializeAws_json1_1UpdateInstantBooking = (input, context) => {
  return {
    ...(input.DurationInMinutes !== undefined &&
      input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};
const serializeAws_json1_1UpdateMeetingRoomConfiguration = (input, context) => {
  return {
    ...(input.EndOfMeetingReminder !== undefined &&
      input.EndOfMeetingReminder !== null && {
        EndOfMeetingReminder: serializeAws_json1_1UpdateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
      }),
    ...(input.InstantBooking !== undefined &&
      input.InstantBooking !== null && {
        InstantBooking: serializeAws_json1_1UpdateInstantBooking(input.InstantBooking, context),
      }),
    ...(input.RequireCheckIn !== undefined &&
      input.RequireCheckIn !== null && {
        RequireCheckIn: serializeAws_json1_1UpdateRequireCheckIn(input.RequireCheckIn, context),
      }),
    ...(input.RoomUtilizationMetricsEnabled !== undefined &&
      input.RoomUtilizationMetricsEnabled !== null && {
        RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
      }),
  };
};
const serializeAws_json1_1UpdateNetworkProfileRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CurrentPassword !== undefined &&
      input.CurrentPassword !== null && { CurrentPassword: input.CurrentPassword }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
    ...(input.NetworkProfileName !== undefined &&
      input.NetworkProfileName !== null && { NetworkProfileName: input.NetworkProfileName }),
    ...(input.NextPassword !== undefined && input.NextPassword !== null && { NextPassword: input.NextPassword }),
    ...(input.TrustAnchors !== undefined &&
      input.TrustAnchors !== null && {
        TrustAnchors: serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context),
      }),
  };
};
const serializeAws_json1_1UpdateProfileRequest = (input, context) => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.DataRetentionOptIn !== undefined &&
      input.DataRetentionOptIn !== null && { DataRetentionOptIn: input.DataRetentionOptIn }),
    ...(input.DistanceUnit !== undefined && input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }),
    ...(input.IsDefault !== undefined && input.IsDefault !== null && { IsDefault: input.IsDefault }),
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.MaxVolumeLimit !== undefined &&
      input.MaxVolumeLimit !== null && { MaxVolumeLimit: input.MaxVolumeLimit }),
    ...(input.MeetingRoomConfiguration !== undefined &&
      input.MeetingRoomConfiguration !== null && {
        MeetingRoomConfiguration: serializeAws_json1_1UpdateMeetingRoomConfiguration(
          input.MeetingRoomConfiguration,
          context
        ),
      }),
    ...(input.PSTNEnabled !== undefined && input.PSTNEnabled !== null && { PSTNEnabled: input.PSTNEnabled }),
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
    ...(input.ProfileName !== undefined && input.ProfileName !== null && { ProfileName: input.ProfileName }),
    ...(input.SetupModeDisabled !== undefined &&
      input.SetupModeDisabled !== null && { SetupModeDisabled: input.SetupModeDisabled }),
    ...(input.TemperatureUnit !== undefined &&
      input.TemperatureUnit !== null && { TemperatureUnit: input.TemperatureUnit }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    ...(input.WakeWord !== undefined && input.WakeWord !== null && { WakeWord: input.WakeWord }),
  };
};
const serializeAws_json1_1UpdateRequireCheckIn = (input, context) => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReleaseAfterMinutes !== undefined &&
      input.ReleaseAfterMinutes !== null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }),
  };
};
const serializeAws_json1_1UpdateRoomRequest = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
    ...(input.ProviderCalendarId !== undefined &&
      input.ProviderCalendarId !== null && { ProviderCalendarId: input.ProviderCalendarId }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.RoomName !== undefined && input.RoomName !== null && { RoomName: input.RoomName }),
  };
};
const serializeAws_json1_1UpdateSkillGroupRequest = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillGroupName !== undefined &&
      input.SkillGroupName !== null && { SkillGroupName: input.SkillGroupName }),
  };
};
const deserializeAws_json1_1AddressBook = (output, context) => {
  return {
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
const deserializeAws_json1_1AddressBookData = (output, context) => {
  return {
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
const deserializeAws_json1_1AddressBookDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AddressBookData(entry, context);
    });
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ApproveSkillResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AssociateContactWithAddressBookResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AssociateDeviceWithRoomResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AssociateSkillGroupWithRoomResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AssociateSkillWithSkillGroupResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AssociateSkillWithUsersResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1BulletPoints = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1BusinessReport = (output, context) => {
  return {
    DeliveryTime:
      output.DeliveryTime !== undefined && output.DeliveryTime !== null
        ? new Date(Math.round(output.DeliveryTime * 1000))
        : undefined,
    DownloadUrl: output.DownloadUrl !== undefined && output.DownloadUrl !== null ? output.DownloadUrl : undefined,
    FailureCode: output.FailureCode !== undefined && output.FailureCode !== null ? output.FailureCode : undefined,
    S3Location:
      output.S3Location !== undefined && output.S3Location !== null
        ? deserializeAws_json1_1BusinessReportS3Location(output.S3Location, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_json1_1BusinessReportContentRange = (output, context) => {
  return {
    Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
  };
};
const deserializeAws_json1_1BusinessReportRecurrence = (output, context) => {
  return {
    StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
  };
};
const deserializeAws_json1_1BusinessReportS3Location = (output, context) => {
  return {
    BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
  };
};
const deserializeAws_json1_1BusinessReportSchedule = (output, context) => {
  return {
    ContentRange:
      output.ContentRange !== undefined && output.ContentRange !== null
        ? deserializeAws_json1_1BusinessReportContentRange(output.ContentRange, context)
        : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    LastBusinessReport:
      output.LastBusinessReport !== undefined && output.LastBusinessReport !== null
        ? deserializeAws_json1_1BusinessReport(output.LastBusinessReport, context)
        : undefined,
    Recurrence:
      output.Recurrence !== undefined && output.Recurrence !== null
        ? deserializeAws_json1_1BusinessReportRecurrence(output.Recurrence, context)
        : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
    ScheduleArn: output.ScheduleArn !== undefined && output.ScheduleArn !== null ? output.ScheduleArn : undefined,
    ScheduleName: output.ScheduleName !== undefined && output.ScheduleName !== null ? output.ScheduleName : undefined,
  };
};
const deserializeAws_json1_1BusinessReportScheduleList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1BusinessReportSchedule(entry, context);
    });
};
const deserializeAws_json1_1Category = (output, context) => {
  return {
    CategoryId: output.CategoryId !== undefined && output.CategoryId !== null ? output.CategoryId : undefined,
    CategoryName: output.CategoryName !== undefined && output.CategoryName !== null ? output.CategoryName : undefined,
  };
};
const deserializeAws_json1_1CategoryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Category(entry, context);
    });
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ConferencePreference = (output, context) => {
  return {
    DefaultConferenceProviderArn:
      output.DefaultConferenceProviderArn !== undefined && output.DefaultConferenceProviderArn !== null
        ? output.DefaultConferenceProviderArn
        : undefined,
  };
};
const deserializeAws_json1_1ConferenceProvider = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    IPDialIn:
      output.IPDialIn !== undefined && output.IPDialIn !== null
        ? deserializeAws_json1_1IPDialIn(output.IPDialIn, context)
        : undefined,
    MeetingSetting:
      output.MeetingSetting !== undefined && output.MeetingSetting !== null
        ? deserializeAws_json1_1MeetingSetting(output.MeetingSetting, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    PSTNDialIn:
      output.PSTNDialIn !== undefined && output.PSTNDialIn !== null
        ? deserializeAws_json1_1PSTNDialIn(output.PSTNDialIn, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1ConferenceProvidersList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ConferenceProvider(entry, context);
    });
};
const deserializeAws_json1_1Contact = (output, context) => {
  return {
    ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
    LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
    PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
    PhoneNumbers:
      output.PhoneNumbers !== undefined && output.PhoneNumbers !== null
        ? deserializeAws_json1_1PhoneNumberList(output.PhoneNumbers, context)
        : undefined,
    SipAddresses:
      output.SipAddresses !== undefined && output.SipAddresses !== null
        ? deserializeAws_json1_1SipAddressList(output.SipAddresses, context)
        : undefined,
  };
};
const deserializeAws_json1_1ContactData = (output, context) => {
  return {
    ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
    DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
    FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
    LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
    PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
    PhoneNumbers:
      output.PhoneNumbers !== undefined && output.PhoneNumbers !== null
        ? deserializeAws_json1_1PhoneNumberList(output.PhoneNumbers, context)
        : undefined,
    SipAddresses:
      output.SipAddresses !== undefined && output.SipAddresses !== null
        ? deserializeAws_json1_1SipAddressList(output.SipAddresses, context)
        : undefined,
  };
};
const deserializeAws_json1_1ContactDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ContactData(entry, context);
    });
};
const deserializeAws_json1_1CreateAddressBookResponse = (output, context) => {
  return {
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
  };
};
const deserializeAws_json1_1CreateBusinessReportScheduleResponse = (output, context) => {
  return {
    ScheduleArn: output.ScheduleArn !== undefined && output.ScheduleArn !== null ? output.ScheduleArn : undefined,
  };
};
const deserializeAws_json1_1CreateConferenceProviderResponse = (output, context) => {
  return {
    ConferenceProviderArn:
      output.ConferenceProviderArn !== undefined && output.ConferenceProviderArn !== null
        ? output.ConferenceProviderArn
        : undefined,
  };
};
const deserializeAws_json1_1CreateContactResponse = (output, context) => {
  return {
    ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
  };
};
const deserializeAws_json1_1CreateGatewayGroupResponse = (output, context) => {
  return {
    GatewayGroupArn:
      output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null ? output.GatewayGroupArn : undefined,
  };
};
const deserializeAws_json1_1CreateNetworkProfileResponse = (output, context) => {
  return {
    NetworkProfileArn:
      output.NetworkProfileArn !== undefined && output.NetworkProfileArn !== null
        ? output.NetworkProfileArn
        : undefined,
  };
};
const deserializeAws_json1_1CreateProfileResponse = (output, context) => {
  return {
    ProfileArn: output.ProfileArn !== undefined && output.ProfileArn !== null ? output.ProfileArn : undefined,
  };
};
const deserializeAws_json1_1CreateRoomResponse = (output, context) => {
  return {
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
  };
};
const deserializeAws_json1_1CreateSkillGroupResponse = (output, context) => {
  return {
    SkillGroupArn:
      output.SkillGroupArn !== undefined && output.SkillGroupArn !== null ? output.SkillGroupArn : undefined,
  };
};
const deserializeAws_json1_1CreateUserResponse = (output, context) => {
  return {
    UserArn: output.UserArn !== undefined && output.UserArn !== null ? output.UserArn : undefined,
  };
};
const deserializeAws_json1_1DeleteAddressBookResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteBusinessReportScheduleResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteConferenceProviderResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteContactResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteDeviceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteDeviceUsageDataResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteGatewayGroupResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteNetworkProfileResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteProfileResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteRoomResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteRoomSkillParameterResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteSkillAuthorizationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteSkillGroupResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteUserResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeveloperInfo = (output, context) => {
  return {
    DeveloperName:
      output.DeveloperName !== undefined && output.DeveloperName !== null ? output.DeveloperName : undefined,
    Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
    PrivacyPolicy:
      output.PrivacyPolicy !== undefined && output.PrivacyPolicy !== null ? output.PrivacyPolicy : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  };
};
const deserializeAws_json1_1Device = (output, context) => {
  return {
    DeviceArn: output.DeviceArn !== undefined && output.DeviceArn !== null ? output.DeviceArn : undefined,
    DeviceName: output.DeviceName !== undefined && output.DeviceName !== null ? output.DeviceName : undefined,
    DeviceSerialNumber:
      output.DeviceSerialNumber !== undefined && output.DeviceSerialNumber !== null
        ? output.DeviceSerialNumber
        : undefined,
    DeviceStatus: output.DeviceStatus !== undefined && output.DeviceStatus !== null ? output.DeviceStatus : undefined,
    DeviceStatusInfo:
      output.DeviceStatusInfo !== undefined && output.DeviceStatusInfo !== null
        ? deserializeAws_json1_1DeviceStatusInfo(output.DeviceStatusInfo, context)
        : undefined,
    DeviceType: output.DeviceType !== undefined && output.DeviceType !== null ? output.DeviceType : undefined,
    MacAddress: output.MacAddress !== undefined && output.MacAddress !== null ? output.MacAddress : undefined,
    NetworkProfileInfo:
      output.NetworkProfileInfo !== undefined && output.NetworkProfileInfo !== null
        ? deserializeAws_json1_1DeviceNetworkProfileInfo(output.NetworkProfileInfo, context)
        : undefined,
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
    SoftwareVersion:
      output.SoftwareVersion !== undefined && output.SoftwareVersion !== null ? output.SoftwareVersion : undefined,
  };
};
const deserializeAws_json1_1DeviceData = (output, context) => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DeviceArn: output.DeviceArn !== undefined && output.DeviceArn !== null ? output.DeviceArn : undefined,
    DeviceName: output.DeviceName !== undefined && output.DeviceName !== null ? output.DeviceName : undefined,
    DeviceSerialNumber:
      output.DeviceSerialNumber !== undefined && output.DeviceSerialNumber !== null
        ? output.DeviceSerialNumber
        : undefined,
    DeviceStatus: output.DeviceStatus !== undefined && output.DeviceStatus !== null ? output.DeviceStatus : undefined,
    DeviceStatusInfo:
      output.DeviceStatusInfo !== undefined && output.DeviceStatusInfo !== null
        ? deserializeAws_json1_1DeviceStatusInfo(output.DeviceStatusInfo, context)
        : undefined,
    DeviceType: output.DeviceType !== undefined && output.DeviceType !== null ? output.DeviceType : undefined,
    MacAddress: output.MacAddress !== undefined && output.MacAddress !== null ? output.MacAddress : undefined,
    NetworkProfileArn:
      output.NetworkProfileArn !== undefined && output.NetworkProfileArn !== null
        ? output.NetworkProfileArn
        : undefined,
    NetworkProfileName:
      output.NetworkProfileName !== undefined && output.NetworkProfileName !== null
        ? output.NetworkProfileName
        : undefined,
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
    RoomName: output.RoomName !== undefined && output.RoomName !== null ? output.RoomName : undefined,
    SoftwareVersion:
      output.SoftwareVersion !== undefined && output.SoftwareVersion !== null ? output.SoftwareVersion : undefined,
  };
};
const deserializeAws_json1_1DeviceDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DeviceData(entry, context);
    });
};
const deserializeAws_json1_1DeviceEvent = (output, context) => {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1DeviceEventList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DeviceEvent(entry, context);
    });
};
const deserializeAws_json1_1DeviceNetworkProfileInfo = (output, context) => {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
    CertificateExpirationTime:
      output.CertificateExpirationTime !== undefined && output.CertificateExpirationTime !== null
        ? new Date(Math.round(output.CertificateExpirationTime * 1000))
        : undefined,
    NetworkProfileArn:
      output.NetworkProfileArn !== undefined && output.NetworkProfileArn !== null
        ? output.NetworkProfileArn
        : undefined,
  };
};
const deserializeAws_json1_1DeviceNotRegisteredException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1DeviceStatusDetail = (output, context) => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Feature: output.Feature !== undefined && output.Feature !== null ? output.Feature : undefined,
  };
};
const deserializeAws_json1_1DeviceStatusDetails = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DeviceStatusDetail(entry, context);
    });
};
const deserializeAws_json1_1DeviceStatusInfo = (output, context) => {
  return {
    ConnectionStatus:
      output.ConnectionStatus !== undefined && output.ConnectionStatus !== null ? output.ConnectionStatus : undefined,
    ConnectionStatusUpdatedTime:
      output.ConnectionStatusUpdatedTime !== undefined && output.ConnectionStatusUpdatedTime !== null
        ? new Date(Math.round(output.ConnectionStatusUpdatedTime * 1000))
        : undefined,
    DeviceStatusDetails:
      output.DeviceStatusDetails !== undefined && output.DeviceStatusDetails !== null
        ? deserializeAws_json1_1DeviceStatusDetails(output.DeviceStatusDetails, context)
        : undefined,
  };
};
const deserializeAws_json1_1DisassociateContactFromAddressBookResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DisassociateDeviceFromRoomResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DisassociateSkillFromUsersResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1EndOfMeetingReminder = (output, context) => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    ReminderAtMinutes:
      output.ReminderAtMinutes !== undefined && output.ReminderAtMinutes !== null
        ? deserializeAws_json1_1EndOfMeetingReminderMinutesList(output.ReminderAtMinutes, context)
        : undefined,
    ReminderType: output.ReminderType !== undefined && output.ReminderType !== null ? output.ReminderType : undefined,
  };
};
const deserializeAws_json1_1EndOfMeetingReminderMinutesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1ForgetSmartHomeAppliancesResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1Gateway = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    GatewayGroupArn:
      output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null ? output.GatewayGroupArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SoftwareVersion:
      output.SoftwareVersion !== undefined && output.SoftwareVersion !== null ? output.SoftwareVersion : undefined,
  };
};
const deserializeAws_json1_1GatewayGroup = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
const deserializeAws_json1_1GatewayGroupSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1GatewayGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1GatewayGroupSummary = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
const deserializeAws_json1_1GatewaySummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1GatewaySummary(entry, context);
    });
};
const deserializeAws_json1_1GatewaySummary = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    GatewayGroupArn:
      output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null ? output.GatewayGroupArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SoftwareVersion:
      output.SoftwareVersion !== undefined && output.SoftwareVersion !== null ? output.SoftwareVersion : undefined,
  };
};
const deserializeAws_json1_1GenericKeywords = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1GetAddressBookResponse = (output, context) => {
  return {
    AddressBook:
      output.AddressBook !== undefined && output.AddressBook !== null
        ? deserializeAws_json1_1AddressBook(output.AddressBook, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetConferencePreferenceResponse = (output, context) => {
  return {
    Preference:
      output.Preference !== undefined && output.Preference !== null
        ? deserializeAws_json1_1ConferencePreference(output.Preference, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetConferenceProviderResponse = (output, context) => {
  return {
    ConferenceProvider:
      output.ConferenceProvider !== undefined && output.ConferenceProvider !== null
        ? deserializeAws_json1_1ConferenceProvider(output.ConferenceProvider, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetContactResponse = (output, context) => {
  return {
    Contact:
      output.Contact !== undefined && output.Contact !== null
        ? deserializeAws_json1_1Contact(output.Contact, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetDeviceResponse = (output, context) => {
  return {
    Device:
      output.Device !== undefined && output.Device !== null
        ? deserializeAws_json1_1Device(output.Device, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetGatewayGroupResponse = (output, context) => {
  return {
    GatewayGroup:
      output.GatewayGroup !== undefined && output.GatewayGroup !== null
        ? deserializeAws_json1_1GatewayGroup(output.GatewayGroup, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetGatewayResponse = (output, context) => {
  return {
    Gateway:
      output.Gateway !== undefined && output.Gateway !== null
        ? deserializeAws_json1_1Gateway(output.Gateway, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetInvitationConfigurationResponse = (output, context) => {
  return {
    ContactEmail: output.ContactEmail !== undefined && output.ContactEmail !== null ? output.ContactEmail : undefined,
    OrganizationName:
      output.OrganizationName !== undefined && output.OrganizationName !== null ? output.OrganizationName : undefined,
    PrivateSkillIds:
      output.PrivateSkillIds !== undefined && output.PrivateSkillIds !== null
        ? deserializeAws_json1_1ShortSkillIdList(output.PrivateSkillIds, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetNetworkProfileResponse = (output, context) => {
  return {
    NetworkProfile:
      output.NetworkProfile !== undefined && output.NetworkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.NetworkProfile, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetProfileResponse = (output, context) => {
  return {
    Profile:
      output.Profile !== undefined && output.Profile !== null
        ? deserializeAws_json1_1Profile(output.Profile, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetRoomResponse = (output, context) => {
  return {
    Room:
      output.Room !== undefined && output.Room !== null ? deserializeAws_json1_1Room(output.Room, context) : undefined,
  };
};
const deserializeAws_json1_1GetRoomSkillParameterResponse = (output, context) => {
  return {
    RoomSkillParameter:
      output.RoomSkillParameter !== undefined && output.RoomSkillParameter !== null
        ? deserializeAws_json1_1RoomSkillParameter(output.RoomSkillParameter, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetSkillGroupResponse = (output, context) => {
  return {
    SkillGroup:
      output.SkillGroup !== undefined && output.SkillGroup !== null
        ? deserializeAws_json1_1SkillGroup(output.SkillGroup, context)
        : undefined,
  };
};
const deserializeAws_json1_1InstantBooking = (output, context) => {
  return {
    DurationInMinutes:
      output.DurationInMinutes !== undefined && output.DurationInMinutes !== null
        ? output.DurationInMinutes
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
  };
};
const deserializeAws_json1_1InvalidCertificateAuthorityException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidDeviceException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidSecretsManagerResourceException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidServiceLinkedRoleStateException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidUserStatusException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1IPDialIn = (output, context) => {
  return {
    CommsProtocol:
      output.CommsProtocol !== undefined && output.CommsProtocol !== null ? output.CommsProtocol : undefined,
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
  };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ListBusinessReportSchedulesResponse = (output, context) => {
  return {
    BusinessReportSchedules:
      output.BusinessReportSchedules !== undefined && output.BusinessReportSchedules !== null
        ? deserializeAws_json1_1BusinessReportScheduleList(output.BusinessReportSchedules, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListConferenceProvidersResponse = (output, context) => {
  return {
    ConferenceProviders:
      output.ConferenceProviders !== undefined && output.ConferenceProviders !== null
        ? deserializeAws_json1_1ConferenceProvidersList(output.ConferenceProviders, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListDeviceEventsResponse = (output, context) => {
  return {
    DeviceEvents:
      output.DeviceEvents !== undefined && output.DeviceEvents !== null
        ? deserializeAws_json1_1DeviceEventList(output.DeviceEvents, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListGatewayGroupsResponse = (output, context) => {
  return {
    GatewayGroups:
      output.GatewayGroups !== undefined && output.GatewayGroups !== null
        ? deserializeAws_json1_1GatewayGroupSummaries(output.GatewayGroups, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListGatewaysResponse = (output, context) => {
  return {
    Gateways:
      output.Gateways !== undefined && output.Gateways !== null
        ? deserializeAws_json1_1GatewaySummaries(output.Gateways, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListSkillsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SkillSummaries:
      output.SkillSummaries !== undefined && output.SkillSummaries !== null
        ? deserializeAws_json1_1SkillSummaryList(output.SkillSummaries, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListSkillsStoreCategoriesResponse = (output, context) => {
  return {
    CategoryList:
      output.CategoryList !== undefined && output.CategoryList !== null
        ? deserializeAws_json1_1CategoryList(output.CategoryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SkillsStoreSkills:
      output.SkillsStoreSkills !== undefined && output.SkillsStoreSkills !== null
        ? deserializeAws_json1_1SkillsStoreSkillList(output.SkillsStoreSkills, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListSmartHomeAppliancesResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SmartHomeAppliances:
      output.SmartHomeAppliances !== undefined && output.SmartHomeAppliances !== null
        ? deserializeAws_json1_1SmartHomeApplianceList(output.SmartHomeAppliances, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
const deserializeAws_json1_1MeetingRoomConfiguration = (output, context) => {
  return {
    EndOfMeetingReminder:
      output.EndOfMeetingReminder !== undefined && output.EndOfMeetingReminder !== null
        ? deserializeAws_json1_1EndOfMeetingReminder(output.EndOfMeetingReminder, context)
        : undefined,
    InstantBooking:
      output.InstantBooking !== undefined && output.InstantBooking !== null
        ? deserializeAws_json1_1InstantBooking(output.InstantBooking, context)
        : undefined,
    RequireCheckIn:
      output.RequireCheckIn !== undefined && output.RequireCheckIn !== null
        ? deserializeAws_json1_1RequireCheckIn(output.RequireCheckIn, context)
        : undefined,
    RoomUtilizationMetricsEnabled:
      output.RoomUtilizationMetricsEnabled !== undefined && output.RoomUtilizationMetricsEnabled !== null
        ? output.RoomUtilizationMetricsEnabled
        : undefined,
  };
};
const deserializeAws_json1_1MeetingSetting = (output, context) => {
  return {
    RequirePin: output.RequirePin !== undefined && output.RequirePin !== null ? output.RequirePin : undefined,
  };
};
const deserializeAws_json1_1NameInUseException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1NetworkProfile = (output, context) => {
  return {
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
    CurrentPassword:
      output.CurrentPassword !== undefined && output.CurrentPassword !== null ? output.CurrentPassword : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EapMethod: output.EapMethod !== undefined && output.EapMethod !== null ? output.EapMethod : undefined,
    NetworkProfileArn:
      output.NetworkProfileArn !== undefined && output.NetworkProfileArn !== null
        ? output.NetworkProfileArn
        : undefined,
    NetworkProfileName:
      output.NetworkProfileName !== undefined && output.NetworkProfileName !== null
        ? output.NetworkProfileName
        : undefined,
    NextPassword: output.NextPassword !== undefined && output.NextPassword !== null ? output.NextPassword : undefined,
    SecurityType: output.SecurityType !== undefined && output.SecurityType !== null ? output.SecurityType : undefined,
    Ssid: output.Ssid !== undefined && output.Ssid !== null ? output.Ssid : undefined,
    TrustAnchors:
      output.TrustAnchors !== undefined && output.TrustAnchors !== null
        ? deserializeAws_json1_1TrustAnchorList(output.TrustAnchors, context)
        : undefined,
  };
};
const deserializeAws_json1_1NetworkProfileData = (output, context) => {
  return {
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EapMethod: output.EapMethod !== undefined && output.EapMethod !== null ? output.EapMethod : undefined,
    NetworkProfileArn:
      output.NetworkProfileArn !== undefined && output.NetworkProfileArn !== null
        ? output.NetworkProfileArn
        : undefined,
    NetworkProfileName:
      output.NetworkProfileName !== undefined && output.NetworkProfileName !== null
        ? output.NetworkProfileName
        : undefined,
    SecurityType: output.SecurityType !== undefined && output.SecurityType !== null ? output.SecurityType : undefined,
    Ssid: output.Ssid !== undefined && output.Ssid !== null ? output.Ssid : undefined,
  };
};
const deserializeAws_json1_1NetworkProfileDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1NetworkProfileData(entry, context);
    });
};
const deserializeAws_json1_1NewInThisVersionBulletPoints = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1PhoneNumber = (output, context) => {
  return {
    Number: output.Number !== undefined && output.Number !== null ? output.Number : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1PhoneNumberList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1PhoneNumber(entry, context);
    });
};
const deserializeAws_json1_1Profile = (output, context) => {
  return {
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
    DataRetentionOptIn:
      output.DataRetentionOptIn !== undefined && output.DataRetentionOptIn !== null
        ? output.DataRetentionOptIn
        : undefined,
    DistanceUnit: output.DistanceUnit !== undefined && output.DistanceUnit !== null ? output.DistanceUnit : undefined,
    IsDefault: output.IsDefault !== undefined && output.IsDefault !== null ? output.IsDefault : undefined,
    Locale: output.Locale !== undefined && output.Locale !== null ? output.Locale : undefined,
    MaxVolumeLimit:
      output.MaxVolumeLimit !== undefined && output.MaxVolumeLimit !== null ? output.MaxVolumeLimit : undefined,
    MeetingRoomConfiguration:
      output.MeetingRoomConfiguration !== undefined && output.MeetingRoomConfiguration !== null
        ? deserializeAws_json1_1MeetingRoomConfiguration(output.MeetingRoomConfiguration, context)
        : undefined,
    PSTNEnabled: output.PSTNEnabled !== undefined && output.PSTNEnabled !== null ? output.PSTNEnabled : undefined,
    ProfileArn: output.ProfileArn !== undefined && output.ProfileArn !== null ? output.ProfileArn : undefined,
    ProfileName: output.ProfileName !== undefined && output.ProfileName !== null ? output.ProfileName : undefined,
    SetupModeDisabled:
      output.SetupModeDisabled !== undefined && output.SetupModeDisabled !== null
        ? output.SetupModeDisabled
        : undefined,
    TemperatureUnit:
      output.TemperatureUnit !== undefined && output.TemperatureUnit !== null ? output.TemperatureUnit : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    WakeWord: output.WakeWord !== undefined && output.WakeWord !== null ? output.WakeWord : undefined,
  };
};
const deserializeAws_json1_1ProfileData = (output, context) => {
  return {
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    DistanceUnit: output.DistanceUnit !== undefined && output.DistanceUnit !== null ? output.DistanceUnit : undefined,
    IsDefault: output.IsDefault !== undefined && output.IsDefault !== null ? output.IsDefault : undefined,
    Locale: output.Locale !== undefined && output.Locale !== null ? output.Locale : undefined,
    ProfileArn: output.ProfileArn !== undefined && output.ProfileArn !== null ? output.ProfileArn : undefined,
    ProfileName: output.ProfileName !== undefined && output.ProfileName !== null ? output.ProfileName : undefined,
    TemperatureUnit:
      output.TemperatureUnit !== undefined && output.TemperatureUnit !== null ? output.TemperatureUnit : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    WakeWord: output.WakeWord !== undefined && output.WakeWord !== null ? output.WakeWord : undefined,
  };
};
const deserializeAws_json1_1ProfileDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ProfileData(entry, context);
    });
};
const deserializeAws_json1_1PSTNDialIn = (output, context) => {
  return {
    CountryCode: output.CountryCode !== undefined && output.CountryCode !== null ? output.CountryCode : undefined,
    OneClickIdDelay:
      output.OneClickIdDelay !== undefined && output.OneClickIdDelay !== null ? output.OneClickIdDelay : undefined,
    OneClickPinDelay:
      output.OneClickPinDelay !== undefined && output.OneClickPinDelay !== null ? output.OneClickPinDelay : undefined,
    PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
  };
};
const deserializeAws_json1_1PutConferencePreferenceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1PutInvitationConfigurationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1PutRoomSkillParameterResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1PutSkillAuthorizationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1RegisterAVSDeviceResponse = (output, context) => {
  return {
    DeviceArn: output.DeviceArn !== undefined && output.DeviceArn !== null ? output.DeviceArn : undefined,
  };
};
const deserializeAws_json1_1RejectSkillResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1RequireCheckIn = (output, context) => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    ReleaseAfterMinutes:
      output.ReleaseAfterMinutes !== undefined && output.ReleaseAfterMinutes !== null
        ? output.ReleaseAfterMinutes
        : undefined,
  };
};
const deserializeAws_json1_1ResolveRoomResponse = (output, context) => {
  return {
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
    RoomName: output.RoomName !== undefined && output.RoomName !== null ? output.RoomName : undefined,
    RoomSkillParameters:
      output.RoomSkillParameters !== undefined && output.RoomSkillParameters !== null
        ? deserializeAws_json1_1RoomSkillParameters(output.RoomSkillParameters, context)
        : undefined,
  };
};
const deserializeAws_json1_1ResourceAssociatedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
  return {
    ClientRequestToken:
      output.ClientRequestToken !== undefined && output.ClientRequestToken !== null
        ? output.ClientRequestToken
        : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Reviews = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_json1_1RevokeInvitationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1Room = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ProfileArn: output.ProfileArn !== undefined && output.ProfileArn !== null ? output.ProfileArn : undefined,
    ProviderCalendarId:
      output.ProviderCalendarId !== undefined && output.ProviderCalendarId !== null
        ? output.ProviderCalendarId
        : undefined,
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
    RoomName: output.RoomName !== undefined && output.RoomName !== null ? output.RoomName : undefined,
  };
};
const deserializeAws_json1_1RoomData = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ProfileArn: output.ProfileArn !== undefined && output.ProfileArn !== null ? output.ProfileArn : undefined,
    ProfileName: output.ProfileName !== undefined && output.ProfileName !== null ? output.ProfileName : undefined,
    ProviderCalendarId:
      output.ProviderCalendarId !== undefined && output.ProviderCalendarId !== null
        ? output.ProviderCalendarId
        : undefined,
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
    RoomName: output.RoomName !== undefined && output.RoomName !== null ? output.RoomName : undefined,
  };
};
const deserializeAws_json1_1RoomDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1RoomData(entry, context);
    });
};
const deserializeAws_json1_1RoomSkillParameter = (output, context) => {
  return {
    ParameterKey: output.ParameterKey !== undefined && output.ParameterKey !== null ? output.ParameterKey : undefined,
    ParameterValue:
      output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
  };
};
const deserializeAws_json1_1RoomSkillParameters = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1RoomSkillParameter(entry, context);
    });
};
const deserializeAws_json1_1SampleUtterances = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1SearchAddressBooksResponse = (output, context) => {
  return {
    AddressBooks:
      output.AddressBooks !== undefined && output.AddressBooks !== null
        ? deserializeAws_json1_1AddressBookDataList(output.AddressBooks, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchContactsResponse = (output, context) => {
  return {
    Contacts:
      output.Contacts !== undefined && output.Contacts !== null
        ? deserializeAws_json1_1ContactDataList(output.Contacts, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchDevicesResponse = (output, context) => {
  return {
    Devices:
      output.Devices !== undefined && output.Devices !== null
        ? deserializeAws_json1_1DeviceDataList(output.Devices, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchNetworkProfilesResponse = (output, context) => {
  return {
    NetworkProfiles:
      output.NetworkProfiles !== undefined && output.NetworkProfiles !== null
        ? deserializeAws_json1_1NetworkProfileDataList(output.NetworkProfiles, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchProfilesResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Profiles:
      output.Profiles !== undefined && output.Profiles !== null
        ? deserializeAws_json1_1ProfileDataList(output.Profiles, context)
        : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchRoomsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Rooms:
      output.Rooms !== undefined && output.Rooms !== null
        ? deserializeAws_json1_1RoomDataList(output.Rooms, context)
        : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchSkillGroupsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SkillGroups:
      output.SkillGroups !== undefined && output.SkillGroups !== null
        ? deserializeAws_json1_1SkillGroupDataList(output.SkillGroups, context)
        : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
const deserializeAws_json1_1SearchUsersResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserDataList(output.Users, context)
        : undefined,
  };
};
const deserializeAws_json1_1SendAnnouncementResponse = (output, context) => {
  return {
    AnnouncementArn:
      output.AnnouncementArn !== undefined && output.AnnouncementArn !== null ? output.AnnouncementArn : undefined,
  };
};
const deserializeAws_json1_1SendInvitationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1ShortSkillIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1SipAddress = (output, context) => {
  return {
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Uri: output.Uri !== undefined && output.Uri !== null ? output.Uri : undefined,
  };
};
const deserializeAws_json1_1SipAddressList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SipAddress(entry, context);
    });
};
const deserializeAws_json1_1SkillDetails = (output, context) => {
  return {
    BulletPoints:
      output.BulletPoints !== undefined && output.BulletPoints !== null
        ? deserializeAws_json1_1BulletPoints(output.BulletPoints, context)
        : undefined,
    DeveloperInfo:
      output.DeveloperInfo !== undefined && output.DeveloperInfo !== null
        ? deserializeAws_json1_1DeveloperInfo(output.DeveloperInfo, context)
        : undefined,
    EndUserLicenseAgreement:
      output.EndUserLicenseAgreement !== undefined && output.EndUserLicenseAgreement !== null
        ? output.EndUserLicenseAgreement
        : undefined,
    GenericKeywords:
      output.GenericKeywords !== undefined && output.GenericKeywords !== null
        ? deserializeAws_json1_1GenericKeywords(output.GenericKeywords, context)
        : undefined,
    InvocationPhrase:
      output.InvocationPhrase !== undefined && output.InvocationPhrase !== null ? output.InvocationPhrase : undefined,
    NewInThisVersionBulletPoints:
      output.NewInThisVersionBulletPoints !== undefined && output.NewInThisVersionBulletPoints !== null
        ? deserializeAws_json1_1NewInThisVersionBulletPoints(output.NewInThisVersionBulletPoints, context)
        : undefined,
    ProductDescription:
      output.ProductDescription !== undefined && output.ProductDescription !== null
        ? output.ProductDescription
        : undefined,
    ReleaseDate: output.ReleaseDate !== undefined && output.ReleaseDate !== null ? output.ReleaseDate : undefined,
    Reviews:
      output.Reviews !== undefined && output.Reviews !== null
        ? deserializeAws_json1_1Reviews(output.Reviews, context)
        : undefined,
    SkillTypes:
      output.SkillTypes !== undefined && output.SkillTypes !== null
        ? deserializeAws_json1_1SkillTypes(output.SkillTypes, context)
        : undefined,
  };
};
const deserializeAws_json1_1SkillGroup = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    SkillGroupArn:
      output.SkillGroupArn !== undefined && output.SkillGroupArn !== null ? output.SkillGroupArn : undefined,
    SkillGroupName:
      output.SkillGroupName !== undefined && output.SkillGroupName !== null ? output.SkillGroupName : undefined,
  };
};
const deserializeAws_json1_1SkillGroupData = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    SkillGroupArn:
      output.SkillGroupArn !== undefined && output.SkillGroupArn !== null ? output.SkillGroupArn : undefined,
    SkillGroupName:
      output.SkillGroupName !== undefined && output.SkillGroupName !== null ? output.SkillGroupName : undefined,
  };
};
const deserializeAws_json1_1SkillGroupDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SkillGroupData(entry, context);
    });
};
const deserializeAws_json1_1SkillNotLinkedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1SkillsStoreSkill = (output, context) => {
  return {
    IconUrl: output.IconUrl !== undefined && output.IconUrl !== null ? output.IconUrl : undefined,
    SampleUtterances:
      output.SampleUtterances !== undefined && output.SampleUtterances !== null
        ? deserializeAws_json1_1SampleUtterances(output.SampleUtterances, context)
        : undefined,
    ShortDescription:
      output.ShortDescription !== undefined && output.ShortDescription !== null ? output.ShortDescription : undefined,
    SkillDetails:
      output.SkillDetails !== undefined && output.SkillDetails !== null
        ? deserializeAws_json1_1SkillDetails(output.SkillDetails, context)
        : undefined,
    SkillId: output.SkillId !== undefined && output.SkillId !== null ? output.SkillId : undefined,
    SkillName: output.SkillName !== undefined && output.SkillName !== null ? output.SkillName : undefined,
    SupportsLinking:
      output.SupportsLinking !== undefined && output.SupportsLinking !== null ? output.SupportsLinking : undefined,
  };
};
const deserializeAws_json1_1SkillsStoreSkillList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SkillsStoreSkill(entry, context);
    });
};
const deserializeAws_json1_1SkillSummary = (output, context) => {
  return {
    EnablementType:
      output.EnablementType !== undefined && output.EnablementType !== null ? output.EnablementType : undefined,
    SkillId: output.SkillId !== undefined && output.SkillId !== null ? output.SkillId : undefined,
    SkillName: output.SkillName !== undefined && output.SkillName !== null ? output.SkillName : undefined,
    SkillType: output.SkillType !== undefined && output.SkillType !== null ? output.SkillType : undefined,
    SupportsLinking:
      output.SupportsLinking !== undefined && output.SupportsLinking !== null ? output.SupportsLinking : undefined,
  };
};
const deserializeAws_json1_1SkillSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SkillSummary(entry, context);
    });
};
const deserializeAws_json1_1SkillTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1SmartHomeAppliance = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    FriendlyName: output.FriendlyName !== undefined && output.FriendlyName !== null ? output.FriendlyName : undefined,
    ManufacturerName:
      output.ManufacturerName !== undefined && output.ManufacturerName !== null ? output.ManufacturerName : undefined,
  };
};
const deserializeAws_json1_1SmartHomeApplianceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SmartHomeAppliance(entry, context);
    });
};
const deserializeAws_json1_1StartDeviceSyncResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1Tag = (output, context) => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1TagList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1TrustAnchorList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1UnauthorizedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateAddressBookResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateBusinessReportScheduleResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateConferenceProviderResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateContactResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateDeviceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateGatewayGroupResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateGatewayResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateNetworkProfileResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateProfileResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateRoomResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateSkillGroupResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UserData = (output, context) => {
  return {
    Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
    EnrollmentId: output.EnrollmentId !== undefined && output.EnrollmentId !== null ? output.EnrollmentId : undefined,
    EnrollmentStatus:
      output.EnrollmentStatus !== undefined && output.EnrollmentStatus !== null ? output.EnrollmentStatus : undefined,
    FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
    LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
    UserArn: output.UserArn !== undefined && output.UserArn !== null ? output.UserArn : undefined,
  };
};
const deserializeAws_json1_1UserDataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserData(entry, context);
    });
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
  const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
  const sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
  return "";
};
//# sourceMappingURL=Aws_json1_1.js.map
