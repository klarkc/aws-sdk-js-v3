import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_1ApproveSkillCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ApproveSkill",
      };
      body = JSON.stringify(serializeAws_json1_1ApproveSkillRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1AssociateContactWithAddressBookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.AssociateContactWithAddressBook",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateContactWithAddressBookRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.AssociateDeviceWithNetworkProfile",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1AssociateDeviceWithRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.AssociateDeviceWithRoom",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1AssociateSkillGroupWithRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.AssociateSkillGroupWithRoom",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateSkillGroupWithRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1AssociateSkillWithSkillGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.AssociateSkillWithSkillGroup",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateSkillWithSkillGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1AssociateSkillWithUsersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.AssociateSkillWithUsers",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateSkillWithUsersRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateAddressBookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateAddressBook",
      };
      body = JSON.stringify(serializeAws_json1_1CreateAddressBookRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateBusinessReportScheduleCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateBusinessReportSchedule",
      };
      body = JSON.stringify(serializeAws_json1_1CreateBusinessReportScheduleRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateConferenceProviderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateConferenceProvider",
      };
      body = JSON.stringify(serializeAws_json1_1CreateConferenceProviderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateContactCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateContact",
      };
      body = JSON.stringify(serializeAws_json1_1CreateContactRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateGatewayGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateGatewayGroup",
      };
      body = JSON.stringify(serializeAws_json1_1CreateGatewayGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateNetworkProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateNetworkProfile",
      };
      body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateProfile",
      };
      body = JSON.stringify(serializeAws_json1_1CreateProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateRoom",
      };
      body = JSON.stringify(serializeAws_json1_1CreateRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateSkillGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateSkillGroup",
      };
      body = JSON.stringify(serializeAws_json1_1CreateSkillGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateUserCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.CreateUser",
      };
      body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteAddressBookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteAddressBook",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteAddressBookRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteBusinessReportScheduleCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteBusinessReportSchedule",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteBusinessReportScheduleRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteConferenceProviderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteConferenceProvider",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteConferenceProviderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteContactCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteContact",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteContactRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteDeviceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteDevice",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteDeviceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteDeviceUsageDataCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteDeviceUsageData",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteDeviceUsageDataRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteGatewayGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteGatewayGroup",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteGatewayGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteNetworkProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteNetworkProfile",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteProfile",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteRoom",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteRoomSkillParameterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteRoomSkillParameter",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteRoomSkillParameterRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteSkillAuthorizationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteSkillAuthorization",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteSkillAuthorizationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteSkillGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteSkillGroup",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteSkillGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteUserCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DeleteUser",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateContactFromAddressBookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DisassociateContactFromAddressBook",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateContactFromAddressBookRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateDeviceFromRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DisassociateDeviceFromRoom",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateDeviceFromRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateSkillFromSkillGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DisassociateSkillFromSkillGroup",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromSkillGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateSkillFromUsersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DisassociateSkillFromUsers",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromUsersRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateSkillGroupFromRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.DisassociateSkillGroupFromRoom",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateSkillGroupFromRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ForgetSmartHomeAppliancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ForgetSmartHomeAppliances",
      };
      body = JSON.stringify(serializeAws_json1_1ForgetSmartHomeAppliancesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetAddressBookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetAddressBook",
      };
      body = JSON.stringify(serializeAws_json1_1GetAddressBookRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetConferencePreferenceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetConferencePreference",
      };
      body = JSON.stringify(serializeAws_json1_1GetConferencePreferenceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetConferenceProviderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetConferenceProvider",
      };
      body = JSON.stringify(serializeAws_json1_1GetConferenceProviderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetContactCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetContact",
      };
      body = JSON.stringify(serializeAws_json1_1GetContactRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetDeviceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetDevice",
      };
      body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetGatewayCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetGateway",
      };
      body = JSON.stringify(serializeAws_json1_1GetGatewayRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetGatewayGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetGatewayGroup",
      };
      body = JSON.stringify(serializeAws_json1_1GetGatewayGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetInvitationConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetInvitationConfiguration",
      };
      body = JSON.stringify(serializeAws_json1_1GetInvitationConfigurationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetNetworkProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetNetworkProfile",
      };
      body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetProfile",
      };
      body = JSON.stringify(serializeAws_json1_1GetProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetRoom",
      };
      body = JSON.stringify(serializeAws_json1_1GetRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetRoomSkillParameterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetRoomSkillParameter",
      };
      body = JSON.stringify(serializeAws_json1_1GetRoomSkillParameterRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetSkillGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.GetSkillGroup",
      };
      body = JSON.stringify(serializeAws_json1_1GetSkillGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListBusinessReportSchedulesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListBusinessReportSchedules",
      };
      body = JSON.stringify(serializeAws_json1_1ListBusinessReportSchedulesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListConferenceProvidersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListConferenceProviders",
      };
      body = JSON.stringify(serializeAws_json1_1ListConferenceProvidersRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListDeviceEventsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListDeviceEvents",
      };
      body = JSON.stringify(serializeAws_json1_1ListDeviceEventsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListGatewayGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListGatewayGroups",
      };
      body = JSON.stringify(serializeAws_json1_1ListGatewayGroupsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListGatewaysCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListGateways",
      };
      body = JSON.stringify(serializeAws_json1_1ListGatewaysRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListSkillsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListSkills",
      };
      body = JSON.stringify(serializeAws_json1_1ListSkillsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListSkillsStoreCategoriesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListSkillsStoreCategories",
      };
      body = JSON.stringify(serializeAws_json1_1ListSkillsStoreCategoriesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListSkillsStoreSkillsByCategory",
      };
      body = JSON.stringify(serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListSmartHomeAppliancesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListSmartHomeAppliances",
      };
      body = JSON.stringify(serializeAws_json1_1ListSmartHomeAppliancesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ListTags",
      };
      body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutConferencePreferenceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.PutConferencePreference",
      };
      body = JSON.stringify(serializeAws_json1_1PutConferencePreferenceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutInvitationConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.PutInvitationConfiguration",
      };
      body = JSON.stringify(serializeAws_json1_1PutInvitationConfigurationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutRoomSkillParameterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.PutRoomSkillParameter",
      };
      body = JSON.stringify(serializeAws_json1_1PutRoomSkillParameterRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutSkillAuthorizationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.PutSkillAuthorization",
      };
      body = JSON.stringify(serializeAws_json1_1PutSkillAuthorizationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RegisterAVSDeviceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.RegisterAVSDevice",
      };
      body = JSON.stringify(serializeAws_json1_1RegisterAVSDeviceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RejectSkillCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.RejectSkill",
      };
      body = JSON.stringify(serializeAws_json1_1RejectSkillRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ResolveRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.ResolveRoom",
      };
      body = JSON.stringify(serializeAws_json1_1ResolveRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RevokeInvitationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.RevokeInvitation",
      };
      body = JSON.stringify(serializeAws_json1_1RevokeInvitationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchAddressBooksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchAddressBooks",
      };
      body = JSON.stringify(serializeAws_json1_1SearchAddressBooksRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchContactsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchContacts",
      };
      body = JSON.stringify(serializeAws_json1_1SearchContactsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchDevicesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchDevices",
      };
      body = JSON.stringify(serializeAws_json1_1SearchDevicesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchNetworkProfilesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchNetworkProfiles",
      };
      body = JSON.stringify(serializeAws_json1_1SearchNetworkProfilesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchProfilesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchProfiles",
      };
      body = JSON.stringify(serializeAws_json1_1SearchProfilesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchRoomsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchRooms",
      };
      body = JSON.stringify(serializeAws_json1_1SearchRoomsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchSkillGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchSkillGroups",
      };
      body = JSON.stringify(serializeAws_json1_1SearchSkillGroupsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SearchUsersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SearchUsers",
      };
      body = JSON.stringify(serializeAws_json1_1SearchUsersRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SendAnnouncementCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SendAnnouncement",
      };
      body = JSON.stringify(serializeAws_json1_1SendAnnouncementRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1SendInvitationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.SendInvitation",
      };
      body = JSON.stringify(serializeAws_json1_1SendInvitationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartDeviceSyncCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.StartDeviceSync",
      };
      body = JSON.stringify(serializeAws_json1_1StartDeviceSyncRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.StartSmartHomeApplianceDiscovery",
      };
      body = JSON.stringify(serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.TagResource",
      };
      body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UntagResource",
      };
      body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateAddressBookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateAddressBook",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateAddressBookRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateBusinessReportScheduleCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateBusinessReportSchedule",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateBusinessReportScheduleRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateConferenceProviderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateConferenceProvider",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateConferenceProviderRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateContactCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateContact",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateContactRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateDeviceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateDevice",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateDeviceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateGatewayCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateGateway",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateGatewayRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateGatewayGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateGatewayGroup",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateGatewayGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateNetworkProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateNetworkProfile",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateProfile",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateProfileRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateRoomCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateRoom",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateRoomRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateSkillGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AlexaForBusiness.UpdateSkillGroup",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateSkillGroupRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1ApproveSkillCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ApproveSkillCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ApproveSkillResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ApproveSkillCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1AssociateContactWithAddressBookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateContactWithAddressBookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateContactWithAddressBookResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateContactWithAddressBookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1AssociateDeviceWithRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateDeviceWithRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateDeviceWithRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateDeviceWithRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1AssociateSkillGroupWithRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateSkillGroupWithRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1AssociateSkillWithSkillGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateSkillWithSkillGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
            case "SkillNotLinkedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#SkillNotLinkedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1SkillNotLinkedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1AssociateSkillWithUsersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AssociateSkillWithUsersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateSkillWithUsersResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateSkillWithUsersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateAddressBookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateAddressBookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateAddressBookResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateAddressBookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateBusinessReportScheduleCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateBusinessReportScheduleCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateBusinessReportScheduleResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateBusinessReportScheduleCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateConferenceProviderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateConferenceProviderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateConferenceProviderResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateConferenceProviderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateContactCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateContactCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateContactResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateContactCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateGatewayGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateGatewayGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateGatewayGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateGatewayGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateNetworkProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateNetworkProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateNetworkProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateNetworkProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "InvalidCertificateAuthorityException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
              return [3 /*break*/, 6];
            case "InvalidServiceLinkedRoleStateException":
              return [3 /*break*/, 8];
            case "com.amazonaws.alexaforbusiness#InvalidServiceLinkedRoleStateException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context),
          ];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse(parsedOutput, context),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateSkillGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateSkillGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateSkillGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateSkillGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateUserCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateUserCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateUserResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateUserCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
            case "ResourceInUseException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#ResourceInUseException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteAddressBookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteAddressBookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteAddressBookResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteAddressBookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteBusinessReportScheduleCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteBusinessReportScheduleCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteBusinessReportScheduleResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteBusinessReportScheduleCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteConferenceProviderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteConferenceProviderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteConferenceProviderResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteConferenceProviderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteContactCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteContactCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteContactResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteContactCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteDeviceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteDeviceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteDeviceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteDeviceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidCertificateAuthorityException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteDeviceUsageDataCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteDeviceUsageDataCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteDeviceUsageDataResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteDeviceUsageDataCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "DeviceNotRegisteredException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteGatewayGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteGatewayGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteGatewayGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteGatewayGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ResourceAssociatedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ResourceAssociatedException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteNetworkProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteNetworkProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteNetworkProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
            case "ResourceInUseException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#ResourceInUseException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteRoomSkillParameterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteRoomSkillParameterCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteRoomSkillParameterResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteRoomSkillParameterCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteSkillAuthorizationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteSkillAuthorizationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteSkillAuthorizationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteSkillAuthorizationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteSkillGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteSkillGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteSkillGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteSkillGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteUserCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteUserCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteUserResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteUserCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisassociateContactFromAddressBookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1DisassociateContactFromAddressBookCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateContactFromAddressBookResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateContactFromAddressBookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisassociateDeviceFromRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DisassociateDeviceFromRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateDeviceFromRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateDeviceFromRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisassociateSkillFromUsersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DisassociateSkillFromUsersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateSkillFromUsersResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateSkillFromUsersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ForgetSmartHomeAppliancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ForgetSmartHomeAppliancesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetAddressBookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetAddressBookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetAddressBookResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetAddressBookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetConferencePreferenceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetConferencePreferenceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetConferencePreferenceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetConferencePreferenceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetConferenceProviderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetConferenceProviderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetConferenceProviderResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetConferenceProviderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetContactCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetContactCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetContactResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetContactCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetDeviceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetDeviceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetDeviceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetDeviceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetGatewayCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetGatewayCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetGatewayResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetGatewayCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetGatewayGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetGatewayGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetGatewayGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetGatewayGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetInvitationConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetInvitationConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetInvitationConfigurationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetInvitationConfigurationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetNetworkProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetNetworkProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetNetworkProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetNetworkProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidSecretsManagerResourceException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetRoomSkillParameterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetRoomSkillParameterCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetRoomSkillParameterResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetRoomSkillParameterCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetSkillGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetSkillGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetSkillGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetSkillGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListBusinessReportSchedulesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListBusinessReportSchedulesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListBusinessReportSchedulesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListBusinessReportSchedulesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListConferenceProvidersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListConferenceProvidersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListConferenceProvidersResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListConferenceProvidersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListDeviceEventsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListDeviceEventsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListDeviceEventsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListDeviceEventsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListGatewayGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListGatewayGroupsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListGatewayGroupsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListGatewayGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListGatewaysCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListGatewaysCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListGatewaysResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListGatewaysCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListSkillsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListSkillsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListSkillsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListSkillsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListSkillsStoreCategoriesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListSkillsStoreCategoriesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListSkillsStoreCategoriesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListSkillsStoreCategoriesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListSmartHomeAppliancesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListSmartHomeAppliancesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListSmartHomeAppliancesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListSmartHomeAppliancesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListTagsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListTagsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1PutConferencePreferenceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutConferencePreferenceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutConferencePreferenceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutConferencePreferenceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1PutInvitationConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutInvitationConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutInvitationConfigurationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutInvitationConfigurationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1PutRoomSkillParameterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutRoomSkillParameterCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutRoomSkillParameterResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutRoomSkillParameterCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1PutSkillAuthorizationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutSkillAuthorizationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutSkillAuthorizationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutSkillAuthorizationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "UnauthorizedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#UnauthorizedException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1RegisterAVSDeviceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RegisterAVSDeviceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1RegisterAVSDeviceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RegisterAVSDeviceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidDeviceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#InvalidDeviceException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidDeviceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1RejectSkillCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RejectSkillCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1RejectSkillResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RejectSkillCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ResolveRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ResolveRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ResolveRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ResolveRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1RevokeInvitationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RevokeInvitationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1RevokeInvitationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RevokeInvitationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchAddressBooksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchAddressBooksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchAddressBooksResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchAddressBooksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchContactsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchContactsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchContactsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchContactsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchDevicesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchDevicesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchDevicesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchDevicesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchNetworkProfilesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchNetworkProfilesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchNetworkProfilesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchNetworkProfilesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchProfilesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchProfilesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchProfilesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchProfilesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchRoomsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchRoomsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchRoomsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchRoomsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchSkillGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchSkillGroupsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchSkillGroupsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchSkillGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SearchUsersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SearchUsersCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SearchUsersResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SearchUsersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = [__assign({}, output)];
          _b = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_b.body = _c.sent()), _b)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            default:
              parsedBody = parsedOutput.body;
              errorCode = parsedBody.code || parsedBody.Code || errorCode;
              response = __assign(__assign({}, parsedBody), {
                name: "" + errorCode,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
              });
          }
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SendAnnouncementCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SendAnnouncementCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SendAnnouncementResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SendAnnouncementCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#LimitExceededException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1SendInvitationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1SendInvitationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1SendInvitationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1SendInvitationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidUserStatusException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#InvalidUserStatusException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidUserStatusExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StartDeviceSyncCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartDeviceSyncCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartDeviceSyncResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartDeviceSyncCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "DeviceNotRegisteredException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1TagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1TagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UntagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateAddressBookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateAddressBookCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateAddressBookResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateAddressBookCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NameInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateBusinessReportScheduleCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateBusinessReportScheduleCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateBusinessReportScheduleResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateBusinessReportScheduleCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateConferenceProviderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateConferenceProviderCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateConferenceProviderResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateConferenceProviderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateContactCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateContactCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateContactResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateContactCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateDeviceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateDeviceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateDeviceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateDeviceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateGatewayCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateGatewayCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateGatewayResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateGatewayCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NameInUseException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateGatewayGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateGatewayGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateGatewayGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateGatewayGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NameInUseException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateNetworkProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateNetworkProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateNetworkProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidCertificateAuthorityException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
              return [3 /*break*/, 4];
            case "InvalidSecretsManagerResourceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
              return [3 /*break*/, 6];
            case "NameInUseException":
              return [3 /*break*/, 8];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context),
          ];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateProfileCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateProfileResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateProfileCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NameInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateRoomCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateRoomCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateRoomResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateRoomCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NameInUseException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateSkillGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateSkillGroupCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateSkillGroupResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateSkillGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "NameInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.alexaforbusiness#NameInUseException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.alexaforbusiness#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1AlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
      contents = __assign(
        { name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ConcurrentModificationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
      contents = __assign(
        { name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1DeviceNotRegisteredExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1DeviceNotRegisteredException(body, context);
      contents = __assign(
        { name: "DeviceNotRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidCertificateAuthorityException(body, context);
      contents = __assign(
        {
          name: "InvalidCertificateAuthorityException",
          $fault: "client",
          $metadata: deserializeMetadata(parsedOutput),
        },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidDeviceExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidDeviceException(body, context);
      contents = __assign(
        { name: "InvalidDeviceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidSecretsManagerResourceException(body, context);
      contents = __assign(
        {
          name: "InvalidSecretsManagerResourceException",
          $fault: "client",
          $metadata: deserializeMetadata(parsedOutput),
        },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidServiceLinkedRoleStateException(body, context);
      contents = __assign(
        {
          name: "InvalidServiceLinkedRoleStateException",
          $fault: "client",
          $metadata: deserializeMetadata(parsedOutput),
        },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidUserStatusExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidUserStatusException(body, context);
      contents = __assign(
        { name: "InvalidUserStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LimitExceededException(body, context);
      contents = __assign(
        { name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1NameInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1NameInUseException(body, context);
      contents = __assign(
        { name: "NameInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1NotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1NotFoundException(body, context);
      contents = __assign(
        { name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceAssociatedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceAssociatedException(body, context);
      contents = __assign(
        { name: "ResourceAssociatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
      contents = __assign(
        { name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1SkillNotLinkedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1SkillNotLinkedException(body, context);
      contents = __assign(
        { name: "SkillNotLinkedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1UnauthorizedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1UnauthorizedException(body, context);
      contents = __assign(
        { name: "UnauthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1ApproveSkillRequest = function (input, context) {
  return __assign({}, input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId });
};
var serializeAws_json1_1AssociateContactWithAddressBookRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AddressBookArn !== undefined && input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }
    ),
    input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }
  );
};
var serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest = function (input, context) {
  return __assign(
    __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }
  );
};
var serializeAws_json1_1AssociateDeviceWithRoomRequest = function (input, context) {
  return __assign(
    __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
  );
};
var serializeAws_json1_1AssociateSkillGroupWithRoomRequest = function (input, context) {
  return __assign(
    __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
  );
};
var serializeAws_json1_1AssociateSkillWithSkillGroupRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
    ),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1AssociateSkillWithUsersRequest = function (input, context) {
  return __assign({}, input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId });
};
var serializeAws_json1_1Audio = function (input, context) {
  return __assign(
    __assign({}, input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    input.Location !== undefined && input.Location !== null && { Location: input.Location }
  );
};
var serializeAws_json1_1AudioList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Audio(entry, context);
    });
};
var serializeAws_json1_1AuthorizationResult = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_json1_1BusinessReportContentRange = function (input, context) {
  return __assign({}, input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval });
};
var serializeAws_json1_1BusinessReportRecurrence = function (input, context) {
  return __assign({}, input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate });
};
var serializeAws_json1_1ConferencePreference = function (input, context) {
  return __assign(
    {},
    input.DefaultConferenceProviderArn !== undefined &&
      input.DefaultConferenceProviderArn !== null && {
        DefaultConferenceProviderArn: input.DefaultConferenceProviderArn,
      }
  );
};
var serializeAws_json1_1Content = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AudioList !== undefined &&
          input.AudioList !== null && { AudioList: serializeAws_json1_1AudioList(input.AudioList, context) }
      ),
      input.SsmlList !== undefined &&
        input.SsmlList !== null && { SsmlList: serializeAws_json1_1SsmlList(input.SsmlList, context) }
    ),
    input.TextList !== undefined &&
      input.TextList !== null && { TextList: serializeAws_json1_1TextList(input.TextList, context) }
  );
};
var serializeAws_json1_1CreateAddressBookRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        {
          ClientRequestToken:
            (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
        },
        input.Description !== undefined && input.Description !== null && { Description: input.Description }
      ),
      input.Name !== undefined && input.Name !== null && { Name: input.Name }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateBusinessReportScheduleRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {
                  ClientRequestToken:
                    (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
                },
                input.ContentRange !== undefined &&
                  input.ContentRange !== null && {
                    ContentRange: serializeAws_json1_1BusinessReportContentRange(input.ContentRange, context),
                  }
              ),
              input.Format !== undefined && input.Format !== null && { Format: input.Format }
            ),
            input.Recurrence !== undefined &&
              input.Recurrence !== null && {
                Recurrence: serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context),
              }
          ),
          input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }
        ),
        input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }
      ),
      input.ScheduleName !== undefined && input.ScheduleName !== null && { ScheduleName: input.ScheduleName }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateConferenceProviderRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {
                ClientRequestToken:
                  (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
              },
              input.ConferenceProviderName !== undefined &&
                input.ConferenceProviderName !== null && { ConferenceProviderName: input.ConferenceProviderName }
            ),
            input.ConferenceProviderType !== undefined &&
              input.ConferenceProviderType !== null && { ConferenceProviderType: input.ConferenceProviderType }
          ),
          input.IPDialIn !== undefined &&
            input.IPDialIn !== null && { IPDialIn: serializeAws_json1_1IPDialIn(input.IPDialIn, context) }
        ),
        input.MeetingSetting !== undefined &&
          input.MeetingSetting !== null && {
            MeetingSetting: serializeAws_json1_1MeetingSetting(input.MeetingSetting, context),
          }
      ),
      input.PSTNDialIn !== undefined &&
        input.PSTNDialIn !== null && { PSTNDialIn: serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context) }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateContactRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {
                  ClientRequestToken:
                    (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
                },
                input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }
              ),
              input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }
            ),
            input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }
          ),
          input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }
        ),
        input.PhoneNumbers !== undefined &&
          input.PhoneNumbers !== null && {
            PhoneNumbers: serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context),
          }
      ),
      input.SipAddresses !== undefined &&
        input.SipAddresses !== null && { SipAddresses: serializeAws_json1_1SipAddressList(input.SipAddresses, context) }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateEndOfMeetingReminder = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
      input.ReminderAtMinutes !== undefined &&
        input.ReminderAtMinutes !== null && {
          ReminderAtMinutes: serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
        }
    ),
    input.ReminderType !== undefined && input.ReminderType !== null && { ReminderType: input.ReminderType }
  );
};
var serializeAws_json1_1CreateGatewayGroupRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        {
          ClientRequestToken:
            (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
        },
        input.Description !== undefined && input.Description !== null && { Description: input.Description }
      ),
      input.Name !== undefined && input.Name !== null && { Name: input.Name }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateInstantBooking = function (input, context) {
  return __assign(
    __assign(
      {},
      input.DurationInMinutes !== undefined &&
        input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }
    ),
    input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }
  );
};
var serializeAws_json1_1CreateMeetingRoomConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.EndOfMeetingReminder !== undefined &&
            input.EndOfMeetingReminder !== null && {
              EndOfMeetingReminder: serializeAws_json1_1CreateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
            }
        ),
        input.InstantBooking !== undefined &&
          input.InstantBooking !== null && {
            InstantBooking: serializeAws_json1_1CreateInstantBooking(input.InstantBooking, context),
          }
      ),
      input.RequireCheckIn !== undefined &&
        input.RequireCheckIn !== null && {
          RequireCheckIn: serializeAws_json1_1CreateRequireCheckIn(input.RequireCheckIn, context),
        }
    ),
    input.RoomUtilizationMetricsEnabled !== undefined &&
      input.RoomUtilizationMetricsEnabled !== null && {
        RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
      }
  );
};
var serializeAws_json1_1CreateNetworkProfileRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.CertificateAuthorityArn !== undefined &&
                          input.CertificateAuthorityArn !== null && {
                            CertificateAuthorityArn: input.CertificateAuthorityArn,
                          }
                      ),
                      {
                        ClientRequestToken:
                          (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
                      }
                    ),
                    input.CurrentPassword !== undefined &&
                      input.CurrentPassword !== null && { CurrentPassword: input.CurrentPassword }
                  ),
                  input.Description !== undefined && input.Description !== null && { Description: input.Description }
                ),
                input.EapMethod !== undefined && input.EapMethod !== null && { EapMethod: input.EapMethod }
              ),
              input.NetworkProfileName !== undefined &&
                input.NetworkProfileName !== null && { NetworkProfileName: input.NetworkProfileName }
            ),
            input.NextPassword !== undefined && input.NextPassword !== null && { NextPassword: input.NextPassword }
          ),
          input.SecurityType !== undefined && input.SecurityType !== null && { SecurityType: input.SecurityType }
        ),
        input.Ssid !== undefined && input.Ssid !== null && { Ssid: input.Ssid }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
    ),
    input.TrustAnchors !== undefined &&
      input.TrustAnchors !== null && {
        TrustAnchors: serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context),
      }
  );
};
var serializeAws_json1_1CreateProfileRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              {},
                              input.Address !== undefined && input.Address !== null && { Address: input.Address }
                            ),
                            {
                              ClientRequestToken:
                                (_a = input.ClientRequestToken) !== null && _a !== void 0
                                  ? _a
                                  : generateIdempotencyToken(),
                            }
                          ),
                          input.DataRetentionOptIn !== undefined &&
                            input.DataRetentionOptIn !== null && { DataRetentionOptIn: input.DataRetentionOptIn }
                        ),
                        input.DistanceUnit !== undefined &&
                          input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }
                      ),
                      input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }
                    ),
                    input.MaxVolumeLimit !== undefined &&
                      input.MaxVolumeLimit !== null && { MaxVolumeLimit: input.MaxVolumeLimit }
                  ),
                  input.MeetingRoomConfiguration !== undefined &&
                    input.MeetingRoomConfiguration !== null && {
                      MeetingRoomConfiguration: serializeAws_json1_1CreateMeetingRoomConfiguration(
                        input.MeetingRoomConfiguration,
                        context
                      ),
                    }
                ),
                input.PSTNEnabled !== undefined && input.PSTNEnabled !== null && { PSTNEnabled: input.PSTNEnabled }
              ),
              input.ProfileName !== undefined && input.ProfileName !== null && { ProfileName: input.ProfileName }
            ),
            input.SetupModeDisabled !== undefined &&
              input.SetupModeDisabled !== null && { SetupModeDisabled: input.SetupModeDisabled }
          ),
          input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
        ),
        input.TemperatureUnit !== undefined &&
          input.TemperatureUnit !== null && { TemperatureUnit: input.TemperatureUnit }
      ),
      input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }
    ),
    input.WakeWord !== undefined && input.WakeWord !== null && { WakeWord: input.WakeWord }
  );
};
var serializeAws_json1_1CreateRequireCheckIn = function (input, context) {
  return __assign(
    __assign({}, input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    input.ReleaseAfterMinutes !== undefined &&
      input.ReleaseAfterMinutes !== null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }
  );
};
var serializeAws_json1_1CreateRoomRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {
              ClientRequestToken:
                (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
            },
            input.Description !== undefined && input.Description !== null && { Description: input.Description }
          ),
          input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }
        ),
        input.ProviderCalendarId !== undefined &&
          input.ProviderCalendarId !== null && { ProviderCalendarId: input.ProviderCalendarId }
      ),
      input.RoomName !== undefined && input.RoomName !== null && { RoomName: input.RoomName }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateSkillGroupRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        {
          ClientRequestToken:
            (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
        },
        input.Description !== undefined && input.Description !== null && { Description: input.Description }
      ),
      input.SkillGroupName !== undefined && input.SkillGroupName !== null && { SkillGroupName: input.SkillGroupName }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreateUserRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {
              ClientRequestToken:
                (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
            },
            input.Email !== undefined && input.Email !== null && { Email: input.Email }
          ),
          input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }
        ),
        input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
    ),
    input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }
  );
};
var serializeAws_json1_1DeleteAddressBookRequest = function (input, context) {
  return __assign(
    {},
    input.AddressBookArn !== undefined && input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }
  );
};
var serializeAws_json1_1DeleteBusinessReportScheduleRequest = function (input, context) {
  return __assign(
    {},
    input.ScheduleArn !== undefined && input.ScheduleArn !== null && { ScheduleArn: input.ScheduleArn }
  );
};
var serializeAws_json1_1DeleteConferenceProviderRequest = function (input, context) {
  return __assign(
    {},
    input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }
  );
};
var serializeAws_json1_1DeleteContactRequest = function (input, context) {
  return __assign({}, input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn });
};
var serializeAws_json1_1DeleteDeviceRequest = function (input, context) {
  return __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn });
};
var serializeAws_json1_1DeleteDeviceUsageDataRequest = function (input, context) {
  return __assign(
    __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    input.DeviceUsageType !== undefined && input.DeviceUsageType !== null && { DeviceUsageType: input.DeviceUsageType }
  );
};
var serializeAws_json1_1DeleteGatewayGroupRequest = function (input, context) {
  return __assign(
    {},
    input.GatewayGroupArn !== undefined && input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }
  );
};
var serializeAws_json1_1DeleteNetworkProfileRequest = function (input, context) {
  return __assign(
    {},
    input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }
  );
};
var serializeAws_json1_1DeleteProfileRequest = function (input, context) {
  return __assign({}, input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn });
};
var serializeAws_json1_1DeleteRoomRequest = function (input, context) {
  return __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn });
};
var serializeAws_json1_1DeleteRoomSkillParameterRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }
      ),
      input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
    ),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1DeleteSkillAuthorizationRequest = function (input, context) {
  return __assign(
    __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1DeleteSkillGroupRequest = function (input, context) {
  return __assign(
    {},
    input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
  );
};
var serializeAws_json1_1DeleteUserRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.EnrollmentId !== undefined && input.EnrollmentId !== null && { EnrollmentId: input.EnrollmentId }
    ),
    input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }
  );
};
var serializeAws_json1_1DisassociateContactFromAddressBookRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AddressBookArn !== undefined && input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }
    ),
    input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }
  );
};
var serializeAws_json1_1DisassociateDeviceFromRoomRequest = function (input, context) {
  return __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn });
};
var serializeAws_json1_1DisassociateSkillFromSkillGroupRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
    ),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1DisassociateSkillFromUsersRequest = function (input, context) {
  return __assign({}, input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId });
};
var serializeAws_json1_1DisassociateSkillGroupFromRoomRequest = function (input, context) {
  return __assign(
    __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
  );
};
var serializeAws_json1_1EndOfMeetingReminderMinutesList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1Features = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1Filter = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }
  );
};
var serializeAws_json1_1FilterList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};
var serializeAws_json1_1FilterValueList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1ForgetSmartHomeAppliancesRequest = function (input, context) {
  return __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn });
};
var serializeAws_json1_1GetAddressBookRequest = function (input, context) {
  return __assign(
    {},
    input.AddressBookArn !== undefined && input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }
  );
};
var serializeAws_json1_1GetConferencePreferenceRequest = function (input, context) {
  return {};
};
var serializeAws_json1_1GetConferenceProviderRequest = function (input, context) {
  return __assign(
    {},
    input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }
  );
};
var serializeAws_json1_1GetContactRequest = function (input, context) {
  return __assign({}, input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn });
};
var serializeAws_json1_1GetDeviceRequest = function (input, context) {
  return __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn });
};
var serializeAws_json1_1GetGatewayGroupRequest = function (input, context) {
  return __assign(
    {},
    input.GatewayGroupArn !== undefined && input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }
  );
};
var serializeAws_json1_1GetGatewayRequest = function (input, context) {
  return __assign({}, input.GatewayArn !== undefined && input.GatewayArn !== null && { GatewayArn: input.GatewayArn });
};
var serializeAws_json1_1GetInvitationConfigurationRequest = function (input, context) {
  return {};
};
var serializeAws_json1_1GetNetworkProfileRequest = function (input, context) {
  return __assign(
    {},
    input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }
  );
};
var serializeAws_json1_1GetProfileRequest = function (input, context) {
  return __assign({}, input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn });
};
var serializeAws_json1_1GetRoomRequest = function (input, context) {
  return __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn });
};
var serializeAws_json1_1GetRoomSkillParameterRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }
      ),
      input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
    ),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1GetSkillGroupRequest = function (input, context) {
  return __assign(
    {},
    input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
  );
};
var serializeAws_json1_1IPDialIn = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CommsProtocol !== undefined && input.CommsProtocol !== null && { CommsProtocol: input.CommsProtocol }
    ),
    input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }
  );
};
var serializeAws_json1_1ListBusinessReportSchedulesRequest = function (input, context) {
  return __assign(
    __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListConferenceProvidersRequest = function (input, context) {
  return __assign(
    __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListDeviceEventsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
        input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListGatewayGroupsRequest = function (input, context) {
  return __assign(
    __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListGatewaysRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.GatewayGroupArn !== undefined &&
          input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListSkillsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.EnablementType !== undefined &&
              input.EnablementType !== null && { EnablementType: input.EnablementType }
          ),
          input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
        ),
        input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
      ),
      input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
    ),
    input.SkillType !== undefined && input.SkillType !== null && { SkillType: input.SkillType }
  );
};
var serializeAws_json1_1ListSkillsStoreCategoriesRequest = function (input, context) {
  return __assign(
    __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.CategoryId !== undefined && input.CategoryId !== null && { CategoryId: input.CategoryId }),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListSmartHomeAppliancesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
  );
};
var serializeAws_json1_1ListTagsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1MeetingSetting = function (input, context) {
  return __assign({}, input.RequirePin !== undefined && input.RequirePin !== null && { RequirePin: input.RequirePin });
};
var serializeAws_json1_1PhoneNumber = function (input, context) {
  return __assign(
    __assign({}, input.Number !== undefined && input.Number !== null && { Number: input.Number }),
    input.Type !== undefined && input.Type !== null && { Type: input.Type }
  );
};
var serializeAws_json1_1PhoneNumberList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1PhoneNumber(entry, context);
    });
};
var serializeAws_json1_1PSTNDialIn = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }
        ),
        input.OneClickIdDelay !== undefined &&
          input.OneClickIdDelay !== null && { OneClickIdDelay: input.OneClickIdDelay }
      ),
      input.OneClickPinDelay !== undefined &&
        input.OneClickPinDelay !== null && { OneClickPinDelay: input.OneClickPinDelay }
    ),
    input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }
  );
};
var serializeAws_json1_1PutConferencePreferenceRequest = function (input, context) {
  return __assign(
    {},
    input.ConferencePreference !== undefined &&
      input.ConferencePreference !== null && {
        ConferencePreference: serializeAws_json1_1ConferencePreference(input.ConferencePreference, context),
      }
  );
};
var serializeAws_json1_1PutInvitationConfigurationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ContactEmail !== undefined && input.ContactEmail !== null && { ContactEmail: input.ContactEmail }
      ),
      input.OrganizationName !== undefined &&
        input.OrganizationName !== null && { OrganizationName: input.OrganizationName }
    ),
    input.PrivateSkillIds !== undefined &&
      input.PrivateSkillIds !== null && {
        PrivateSkillIds: serializeAws_json1_1ShortSkillIdList(input.PrivateSkillIds, context),
      }
  );
};
var serializeAws_json1_1PutRoomSkillParameterRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
      input.RoomSkillParameter !== undefined &&
        input.RoomSkillParameter !== null && {
          RoomSkillParameter: serializeAws_json1_1RoomSkillParameter(input.RoomSkillParameter, context),
        }
    ),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1PutSkillAuthorizationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AuthorizationResult !== undefined &&
          input.AuthorizationResult !== null && {
            AuthorizationResult: serializeAws_json1_1AuthorizationResult(input.AuthorizationResult, context),
          }
      ),
      input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
    ),
    input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }
  );
};
var serializeAws_json1_1RegisterAVSDeviceRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign({}, input.AmazonId !== undefined && input.AmazonId !== null && { AmazonId: input.AmazonId }),
              input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }
            ),
            input.DeviceSerialNumber !== undefined &&
              input.DeviceSerialNumber !== null && { DeviceSerialNumber: input.DeviceSerialNumber }
          ),
          input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }
        ),
        input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
    ),
    input.UserCode !== undefined && input.UserCode !== null && { UserCode: input.UserCode }
  );
};
var serializeAws_json1_1RejectSkillRequest = function (input, context) {
  return __assign({}, input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId });
};
var serializeAws_json1_1ResolveRoomRequest = function (input, context) {
  return __assign(
    __assign({}, input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
    input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }
  );
};
var serializeAws_json1_1RevokeInvitationRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.EnrollmentId !== undefined && input.EnrollmentId !== null && { EnrollmentId: input.EnrollmentId }
    ),
    input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }
  );
};
var serializeAws_json1_1RoomSkillParameter = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }
    ),
    input.ParameterValue !== undefined && input.ParameterValue !== null && { ParameterValue: input.ParameterValue }
  );
};
var serializeAws_json1_1SearchAddressBooksRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchContactsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchDevicesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchNetworkProfilesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchProfilesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchRoomsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchSkillGroupsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SearchUsersRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }
  );
};
var serializeAws_json1_1SendAnnouncementRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      __assign(
        {
          ClientRequestToken:
            (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
        },
        input.Content !== undefined &&
          input.Content !== null && { Content: serializeAws_json1_1Content(input.Content, context) }
      ),
      input.RoomFilters !== undefined &&
        input.RoomFilters !== null && { RoomFilters: serializeAws_json1_1FilterList(input.RoomFilters, context) }
    ),
    input.TimeToLiveInSeconds !== undefined &&
      input.TimeToLiveInSeconds !== null && { TimeToLiveInSeconds: input.TimeToLiveInSeconds }
  );
};
var serializeAws_json1_1SendInvitationRequest = function (input, context) {
  return __assign({}, input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn });
};
var serializeAws_json1_1ShortSkillIdList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1SipAddress = function (input, context) {
  return __assign(
    __assign({}, input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }
  );
};
var serializeAws_json1_1SipAddressList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1SipAddress(entry, context);
    });
};
var serializeAws_json1_1Sort = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1SortList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Sort(entry, context);
    });
};
var serializeAws_json1_1Ssml = function (input, context) {
  return __assign(
    __assign({}, input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1SsmlList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Ssml(entry, context);
    });
};
var serializeAws_json1_1StartDeviceSyncRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
      input.Features !== undefined &&
        input.Features !== null && { Features: serializeAws_json1_1Features(input.Features, context) }
    ),
    input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
  );
};
var serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest = function (input, context) {
  return __assign({}, input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn });
};
var serializeAws_json1_1Tag = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1TagKeyList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1TagList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1Text = function (input, context) {
  return __assign(
    __assign({}, input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1TextList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Text(entry, context);
    });
};
var serializeAws_json1_1TrustAnchorList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }
  );
};
var serializeAws_json1_1UpdateAddressBookRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AddressBookArn !== undefined && input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }
      ),
      input.Description !== undefined && input.Description !== null && { Description: input.Description }
    ),
    input.Name !== undefined && input.Name !== null && { Name: input.Name }
  );
};
var serializeAws_json1_1UpdateBusinessReportScheduleRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign({}, input.Format !== undefined && input.Format !== null && { Format: input.Format }),
            input.Recurrence !== undefined &&
              input.Recurrence !== null && {
                Recurrence: serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context),
              }
          ),
          input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }
        ),
        input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }
      ),
      input.ScheduleArn !== undefined && input.ScheduleArn !== null && { ScheduleArn: input.ScheduleArn }
    ),
    input.ScheduleName !== undefined && input.ScheduleName !== null && { ScheduleName: input.ScheduleName }
  );
};
var serializeAws_json1_1UpdateConferenceProviderRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.ConferenceProviderArn !== undefined &&
              input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }
          ),
          input.ConferenceProviderType !== undefined &&
            input.ConferenceProviderType !== null && { ConferenceProviderType: input.ConferenceProviderType }
        ),
        input.IPDialIn !== undefined &&
          input.IPDialIn !== null && { IPDialIn: serializeAws_json1_1IPDialIn(input.IPDialIn, context) }
      ),
      input.MeetingSetting !== undefined &&
        input.MeetingSetting !== null && {
          MeetingSetting: serializeAws_json1_1MeetingSetting(input.MeetingSetting, context),
        }
    ),
    input.PSTNDialIn !== undefined &&
      input.PSTNDialIn !== null && { PSTNDialIn: serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context) }
  );
};
var serializeAws_json1_1UpdateContactRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }
              ),
              input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }
            ),
            input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }
          ),
          input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }
        ),
        input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }
      ),
      input.PhoneNumbers !== undefined &&
        input.PhoneNumbers !== null && {
          PhoneNumbers: serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context),
        }
    ),
    input.SipAddresses !== undefined &&
      input.SipAddresses !== null && { SipAddresses: serializeAws_json1_1SipAddressList(input.SipAddresses, context) }
  );
};
var serializeAws_json1_1UpdateDeviceRequest = function (input, context) {
  return __assign(
    __assign({}, input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }
  );
};
var serializeAws_json1_1UpdateEndOfMeetingReminder = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
      input.ReminderAtMinutes !== undefined &&
        input.ReminderAtMinutes !== null && {
          ReminderAtMinutes: serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
        }
    ),
    input.ReminderType !== undefined && input.ReminderType !== null && { ReminderType: input.ReminderType }
  );
};
var serializeAws_json1_1UpdateGatewayGroupRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Description !== undefined && input.Description !== null && { Description: input.Description }),
      input.GatewayGroupArn !== undefined &&
        input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }
    ),
    input.Name !== undefined && input.Name !== null && { Name: input.Name }
  );
};
var serializeAws_json1_1UpdateGatewayRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Description !== undefined && input.Description !== null && { Description: input.Description }
        ),
        input.GatewayArn !== undefined && input.GatewayArn !== null && { GatewayArn: input.GatewayArn }
      ),
      input.Name !== undefined && input.Name !== null && { Name: input.Name }
    ),
    input.SoftwareVersion !== undefined && input.SoftwareVersion !== null && { SoftwareVersion: input.SoftwareVersion }
  );
};
var serializeAws_json1_1UpdateInstantBooking = function (input, context) {
  return __assign(
    __assign(
      {},
      input.DurationInMinutes !== undefined &&
        input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }
    ),
    input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }
  );
};
var serializeAws_json1_1UpdateMeetingRoomConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.EndOfMeetingReminder !== undefined &&
            input.EndOfMeetingReminder !== null && {
              EndOfMeetingReminder: serializeAws_json1_1UpdateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
            }
        ),
        input.InstantBooking !== undefined &&
          input.InstantBooking !== null && {
            InstantBooking: serializeAws_json1_1UpdateInstantBooking(input.InstantBooking, context),
          }
      ),
      input.RequireCheckIn !== undefined &&
        input.RequireCheckIn !== null && {
          RequireCheckIn: serializeAws_json1_1UpdateRequireCheckIn(input.RequireCheckIn, context),
        }
    ),
    input.RoomUtilizationMetricsEnabled !== undefined &&
      input.RoomUtilizationMetricsEnabled !== null && {
        RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
      }
  );
};
var serializeAws_json1_1UpdateNetworkProfileRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.CertificateAuthorityArn !== undefined &&
                  input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
              ),
              input.CurrentPassword !== undefined &&
                input.CurrentPassword !== null && { CurrentPassword: input.CurrentPassword }
            ),
            input.Description !== undefined && input.Description !== null && { Description: input.Description }
          ),
          input.NetworkProfileArn !== undefined &&
            input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }
        ),
        input.NetworkProfileName !== undefined &&
          input.NetworkProfileName !== null && { NetworkProfileName: input.NetworkProfileName }
      ),
      input.NextPassword !== undefined && input.NextPassword !== null && { NextPassword: input.NextPassword }
    ),
    input.TrustAnchors !== undefined &&
      input.TrustAnchors !== null && {
        TrustAnchors: serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context),
      }
  );
};
var serializeAws_json1_1UpdateProfileRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              {},
                              input.Address !== undefined && input.Address !== null && { Address: input.Address }
                            ),
                            input.DataRetentionOptIn !== undefined &&
                              input.DataRetentionOptIn !== null && { DataRetentionOptIn: input.DataRetentionOptIn }
                          ),
                          input.DistanceUnit !== undefined &&
                            input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }
                        ),
                        input.IsDefault !== undefined && input.IsDefault !== null && { IsDefault: input.IsDefault }
                      ),
                      input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }
                    ),
                    input.MaxVolumeLimit !== undefined &&
                      input.MaxVolumeLimit !== null && { MaxVolumeLimit: input.MaxVolumeLimit }
                  ),
                  input.MeetingRoomConfiguration !== undefined &&
                    input.MeetingRoomConfiguration !== null && {
                      MeetingRoomConfiguration: serializeAws_json1_1UpdateMeetingRoomConfiguration(
                        input.MeetingRoomConfiguration,
                        context
                      ),
                    }
                ),
                input.PSTNEnabled !== undefined && input.PSTNEnabled !== null && { PSTNEnabled: input.PSTNEnabled }
              ),
              input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }
            ),
            input.ProfileName !== undefined && input.ProfileName !== null && { ProfileName: input.ProfileName }
          ),
          input.SetupModeDisabled !== undefined &&
            input.SetupModeDisabled !== null && { SetupModeDisabled: input.SetupModeDisabled }
        ),
        input.TemperatureUnit !== undefined &&
          input.TemperatureUnit !== null && { TemperatureUnit: input.TemperatureUnit }
      ),
      input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }
    ),
    input.WakeWord !== undefined && input.WakeWord !== null && { WakeWord: input.WakeWord }
  );
};
var serializeAws_json1_1UpdateRequireCheckIn = function (input, context) {
  return __assign(
    __assign({}, input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    input.ReleaseAfterMinutes !== undefined &&
      input.ReleaseAfterMinutes !== null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }
  );
};
var serializeAws_json1_1UpdateRoomRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.Description !== undefined && input.Description !== null && { Description: input.Description }
          ),
          input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }
        ),
        input.ProviderCalendarId !== undefined &&
          input.ProviderCalendarId !== null && { ProviderCalendarId: input.ProviderCalendarId }
      ),
      input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }
    ),
    input.RoomName !== undefined && input.RoomName !== null && { RoomName: input.RoomName }
  );
};
var serializeAws_json1_1UpdateSkillGroupRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Description !== undefined && input.Description !== null && { Description: input.Description }),
      input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }
    ),
    input.SkillGroupName !== undefined && input.SkillGroupName !== null && { SkillGroupName: input.SkillGroupName }
  );
};
var deserializeAws_json1_1AddressBook = function (output, context) {
  return {
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
var deserializeAws_json1_1AddressBookData = function (output, context) {
  return {
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
var deserializeAws_json1_1AddressBookDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AddressBookData(entry, context);
    });
};
var deserializeAws_json1_1AlreadyExistsException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ApproveSkillResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AssociateContactWithAddressBookResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AssociateDeviceWithRoomResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AssociateSkillGroupWithRoomResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AssociateSkillWithSkillGroupResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AssociateSkillWithUsersResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1BulletPoints = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1BusinessReport = function (output, context) {
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
var deserializeAws_json1_1BusinessReportContentRange = function (output, context) {
  return {
    Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
  };
};
var deserializeAws_json1_1BusinessReportRecurrence = function (output, context) {
  return {
    StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
  };
};
var deserializeAws_json1_1BusinessReportS3Location = function (output, context) {
  return {
    BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
  };
};
var deserializeAws_json1_1BusinessReportSchedule = function (output, context) {
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
var deserializeAws_json1_1BusinessReportScheduleList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1BusinessReportSchedule(entry, context);
    });
};
var deserializeAws_json1_1Category = function (output, context) {
  return {
    CategoryId: output.CategoryId !== undefined && output.CategoryId !== null ? output.CategoryId : undefined,
    CategoryName: output.CategoryName !== undefined && output.CategoryName !== null ? output.CategoryName : undefined,
  };
};
var deserializeAws_json1_1CategoryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Category(entry, context);
    });
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ConferencePreference = function (output, context) {
  return {
    DefaultConferenceProviderArn:
      output.DefaultConferenceProviderArn !== undefined && output.DefaultConferenceProviderArn !== null
        ? output.DefaultConferenceProviderArn
        : undefined,
  };
};
var deserializeAws_json1_1ConferenceProvider = function (output, context) {
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
var deserializeAws_json1_1ConferenceProvidersList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ConferenceProvider(entry, context);
    });
};
var deserializeAws_json1_1Contact = function (output, context) {
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
var deserializeAws_json1_1ContactData = function (output, context) {
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
var deserializeAws_json1_1ContactDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ContactData(entry, context);
    });
};
var deserializeAws_json1_1CreateAddressBookResponse = function (output, context) {
  return {
    AddressBookArn:
      output.AddressBookArn !== undefined && output.AddressBookArn !== null ? output.AddressBookArn : undefined,
  };
};
var deserializeAws_json1_1CreateBusinessReportScheduleResponse = function (output, context) {
  return {
    ScheduleArn: output.ScheduleArn !== undefined && output.ScheduleArn !== null ? output.ScheduleArn : undefined,
  };
};
var deserializeAws_json1_1CreateConferenceProviderResponse = function (output, context) {
  return {
    ConferenceProviderArn:
      output.ConferenceProviderArn !== undefined && output.ConferenceProviderArn !== null
        ? output.ConferenceProviderArn
        : undefined,
  };
};
var deserializeAws_json1_1CreateContactResponse = function (output, context) {
  return {
    ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
  };
};
var deserializeAws_json1_1CreateGatewayGroupResponse = function (output, context) {
  return {
    GatewayGroupArn:
      output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null ? output.GatewayGroupArn : undefined,
  };
};
var deserializeAws_json1_1CreateNetworkProfileResponse = function (output, context) {
  return {
    NetworkProfileArn:
      output.NetworkProfileArn !== undefined && output.NetworkProfileArn !== null
        ? output.NetworkProfileArn
        : undefined,
  };
};
var deserializeAws_json1_1CreateProfileResponse = function (output, context) {
  return {
    ProfileArn: output.ProfileArn !== undefined && output.ProfileArn !== null ? output.ProfileArn : undefined,
  };
};
var deserializeAws_json1_1CreateRoomResponse = function (output, context) {
  return {
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
  };
};
var deserializeAws_json1_1CreateSkillGroupResponse = function (output, context) {
  return {
    SkillGroupArn:
      output.SkillGroupArn !== undefined && output.SkillGroupArn !== null ? output.SkillGroupArn : undefined,
  };
};
var deserializeAws_json1_1CreateUserResponse = function (output, context) {
  return {
    UserArn: output.UserArn !== undefined && output.UserArn !== null ? output.UserArn : undefined,
  };
};
var deserializeAws_json1_1DeleteAddressBookResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteBusinessReportScheduleResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteConferenceProviderResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteContactResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteDeviceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteDeviceUsageDataResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteGatewayGroupResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteNetworkProfileResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteProfileResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteRoomResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteRoomSkillParameterResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteSkillAuthorizationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteSkillGroupResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteUserResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeveloperInfo = function (output, context) {
  return {
    DeveloperName:
      output.DeveloperName !== undefined && output.DeveloperName !== null ? output.DeveloperName : undefined,
    Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
    PrivacyPolicy:
      output.PrivacyPolicy !== undefined && output.PrivacyPolicy !== null ? output.PrivacyPolicy : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  };
};
var deserializeAws_json1_1Device = function (output, context) {
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
var deserializeAws_json1_1DeviceData = function (output, context) {
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
var deserializeAws_json1_1DeviceDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DeviceData(entry, context);
    });
};
var deserializeAws_json1_1DeviceEvent = function (output, context) {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_1DeviceEventList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DeviceEvent(entry, context);
    });
};
var deserializeAws_json1_1DeviceNetworkProfileInfo = function (output, context) {
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
var deserializeAws_json1_1DeviceNotRegisteredException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1DeviceStatusDetail = function (output, context) {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Feature: output.Feature !== undefined && output.Feature !== null ? output.Feature : undefined,
  };
};
var deserializeAws_json1_1DeviceStatusDetails = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DeviceStatusDetail(entry, context);
    });
};
var deserializeAws_json1_1DeviceStatusInfo = function (output, context) {
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
var deserializeAws_json1_1DisassociateContactFromAddressBookResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DisassociateDeviceFromRoomResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DisassociateSkillFromUsersResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1EndOfMeetingReminder = function (output, context) {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    ReminderAtMinutes:
      output.ReminderAtMinutes !== undefined && output.ReminderAtMinutes !== null
        ? deserializeAws_json1_1EndOfMeetingReminderMinutesList(output.ReminderAtMinutes, context)
        : undefined,
    ReminderType: output.ReminderType !== undefined && output.ReminderType !== null ? output.ReminderType : undefined,
  };
};
var deserializeAws_json1_1EndOfMeetingReminderMinutesList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1ForgetSmartHomeAppliancesResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1Gateway = function (output, context) {
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
var deserializeAws_json1_1GatewayGroup = function (output, context) {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
var deserializeAws_json1_1GatewayGroupSummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1GatewayGroupSummary(entry, context);
    });
};
var deserializeAws_json1_1GatewayGroupSummary = function (output, context) {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
var deserializeAws_json1_1GatewaySummaries = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1GatewaySummary(entry, context);
    });
};
var deserializeAws_json1_1GatewaySummary = function (output, context) {
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
var deserializeAws_json1_1GenericKeywords = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1GetAddressBookResponse = function (output, context) {
  return {
    AddressBook:
      output.AddressBook !== undefined && output.AddressBook !== null
        ? deserializeAws_json1_1AddressBook(output.AddressBook, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetConferencePreferenceResponse = function (output, context) {
  return {
    Preference:
      output.Preference !== undefined && output.Preference !== null
        ? deserializeAws_json1_1ConferencePreference(output.Preference, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetConferenceProviderResponse = function (output, context) {
  return {
    ConferenceProvider:
      output.ConferenceProvider !== undefined && output.ConferenceProvider !== null
        ? deserializeAws_json1_1ConferenceProvider(output.ConferenceProvider, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetContactResponse = function (output, context) {
  return {
    Contact:
      output.Contact !== undefined && output.Contact !== null
        ? deserializeAws_json1_1Contact(output.Contact, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetDeviceResponse = function (output, context) {
  return {
    Device:
      output.Device !== undefined && output.Device !== null
        ? deserializeAws_json1_1Device(output.Device, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetGatewayGroupResponse = function (output, context) {
  return {
    GatewayGroup:
      output.GatewayGroup !== undefined && output.GatewayGroup !== null
        ? deserializeAws_json1_1GatewayGroup(output.GatewayGroup, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetGatewayResponse = function (output, context) {
  return {
    Gateway:
      output.Gateway !== undefined && output.Gateway !== null
        ? deserializeAws_json1_1Gateway(output.Gateway, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetInvitationConfigurationResponse = function (output, context) {
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
var deserializeAws_json1_1GetNetworkProfileResponse = function (output, context) {
  return {
    NetworkProfile:
      output.NetworkProfile !== undefined && output.NetworkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.NetworkProfile, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetProfileResponse = function (output, context) {
  return {
    Profile:
      output.Profile !== undefined && output.Profile !== null
        ? deserializeAws_json1_1Profile(output.Profile, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetRoomResponse = function (output, context) {
  return {
    Room:
      output.Room !== undefined && output.Room !== null ? deserializeAws_json1_1Room(output.Room, context) : undefined,
  };
};
var deserializeAws_json1_1GetRoomSkillParameterResponse = function (output, context) {
  return {
    RoomSkillParameter:
      output.RoomSkillParameter !== undefined && output.RoomSkillParameter !== null
        ? deserializeAws_json1_1RoomSkillParameter(output.RoomSkillParameter, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetSkillGroupResponse = function (output, context) {
  return {
    SkillGroup:
      output.SkillGroup !== undefined && output.SkillGroup !== null
        ? deserializeAws_json1_1SkillGroup(output.SkillGroup, context)
        : undefined,
  };
};
var deserializeAws_json1_1InstantBooking = function (output, context) {
  return {
    DurationInMinutes:
      output.DurationInMinutes !== undefined && output.DurationInMinutes !== null
        ? output.DurationInMinutes
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
  };
};
var deserializeAws_json1_1InvalidCertificateAuthorityException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidDeviceException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidSecretsManagerResourceException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidServiceLinkedRoleStateException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidUserStatusException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1IPDialIn = function (output, context) {
  return {
    CommsProtocol:
      output.CommsProtocol !== undefined && output.CommsProtocol !== null ? output.CommsProtocol : undefined,
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
  };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ListBusinessReportSchedulesResponse = function (output, context) {
  return {
    BusinessReportSchedules:
      output.BusinessReportSchedules !== undefined && output.BusinessReportSchedules !== null
        ? deserializeAws_json1_1BusinessReportScheduleList(output.BusinessReportSchedules, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListConferenceProvidersResponse = function (output, context) {
  return {
    ConferenceProviders:
      output.ConferenceProviders !== undefined && output.ConferenceProviders !== null
        ? deserializeAws_json1_1ConferenceProvidersList(output.ConferenceProviders, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListDeviceEventsResponse = function (output, context) {
  return {
    DeviceEvents:
      output.DeviceEvents !== undefined && output.DeviceEvents !== null
        ? deserializeAws_json1_1DeviceEventList(output.DeviceEvents, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListGatewayGroupsResponse = function (output, context) {
  return {
    GatewayGroups:
      output.GatewayGroups !== undefined && output.GatewayGroups !== null
        ? deserializeAws_json1_1GatewayGroupSummaries(output.GatewayGroups, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListGatewaysResponse = function (output, context) {
  return {
    Gateways:
      output.Gateways !== undefined && output.Gateways !== null
        ? deserializeAws_json1_1GatewaySummaries(output.Gateways, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListSkillsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SkillSummaries:
      output.SkillSummaries !== undefined && output.SkillSummaries !== null
        ? deserializeAws_json1_1SkillSummaryList(output.SkillSummaries, context)
        : undefined,
  };
};
var deserializeAws_json1_1ListSkillsStoreCategoriesResponse = function (output, context) {
  return {
    CategoryList:
      output.CategoryList !== undefined && output.CategoryList !== null
        ? deserializeAws_json1_1CategoryList(output.CategoryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SkillsStoreSkills:
      output.SkillsStoreSkills !== undefined && output.SkillsStoreSkills !== null
        ? deserializeAws_json1_1SkillsStoreSkillList(output.SkillsStoreSkills, context)
        : undefined,
  };
};
var deserializeAws_json1_1ListSmartHomeAppliancesResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SmartHomeAppliances:
      output.SmartHomeAppliances !== undefined && output.SmartHomeAppliances !== null
        ? deserializeAws_json1_1SmartHomeApplianceList(output.SmartHomeAppliances, context)
        : undefined,
  };
};
var deserializeAws_json1_1ListTagsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
var deserializeAws_json1_1MeetingRoomConfiguration = function (output, context) {
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
var deserializeAws_json1_1MeetingSetting = function (output, context) {
  return {
    RequirePin: output.RequirePin !== undefined && output.RequirePin !== null ? output.RequirePin : undefined,
  };
};
var deserializeAws_json1_1NameInUseException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1NetworkProfile = function (output, context) {
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
var deserializeAws_json1_1NetworkProfileData = function (output, context) {
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
var deserializeAws_json1_1NetworkProfileDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1NetworkProfileData(entry, context);
    });
};
var deserializeAws_json1_1NewInThisVersionBulletPoints = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1NotFoundException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1PhoneNumber = function (output, context) {
  return {
    Number: output.Number !== undefined && output.Number !== null ? output.Number : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
var deserializeAws_json1_1PhoneNumberList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1PhoneNumber(entry, context);
    });
};
var deserializeAws_json1_1Profile = function (output, context) {
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
var deserializeAws_json1_1ProfileData = function (output, context) {
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
var deserializeAws_json1_1ProfileDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ProfileData(entry, context);
    });
};
var deserializeAws_json1_1PSTNDialIn = function (output, context) {
  return {
    CountryCode: output.CountryCode !== undefined && output.CountryCode !== null ? output.CountryCode : undefined,
    OneClickIdDelay:
      output.OneClickIdDelay !== undefined && output.OneClickIdDelay !== null ? output.OneClickIdDelay : undefined,
    OneClickPinDelay:
      output.OneClickPinDelay !== undefined && output.OneClickPinDelay !== null ? output.OneClickPinDelay : undefined,
    PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
  };
};
var deserializeAws_json1_1PutConferencePreferenceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1PutInvitationConfigurationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1PutRoomSkillParameterResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1PutSkillAuthorizationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1RegisterAVSDeviceResponse = function (output, context) {
  return {
    DeviceArn: output.DeviceArn !== undefined && output.DeviceArn !== null ? output.DeviceArn : undefined,
  };
};
var deserializeAws_json1_1RejectSkillResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1RequireCheckIn = function (output, context) {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    ReleaseAfterMinutes:
      output.ReleaseAfterMinutes !== undefined && output.ReleaseAfterMinutes !== null
        ? output.ReleaseAfterMinutes
        : undefined,
  };
};
var deserializeAws_json1_1ResolveRoomResponse = function (output, context) {
  return {
    RoomArn: output.RoomArn !== undefined && output.RoomArn !== null ? output.RoomArn : undefined,
    RoomName: output.RoomName !== undefined && output.RoomName !== null ? output.RoomName : undefined,
    RoomSkillParameters:
      output.RoomSkillParameters !== undefined && output.RoomSkillParameters !== null
        ? deserializeAws_json1_1RoomSkillParameters(output.RoomSkillParameters, context)
        : undefined,
  };
};
var deserializeAws_json1_1ResourceAssociatedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
  return {
    ClientRequestToken:
      output.ClientRequestToken !== undefined && output.ClientRequestToken !== null
        ? output.ClientRequestToken
        : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Reviews = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_json1_1RevokeInvitationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1Room = function (output, context) {
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
var deserializeAws_json1_1RoomData = function (output, context) {
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
var deserializeAws_json1_1RoomDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1RoomData(entry, context);
    });
};
var deserializeAws_json1_1RoomSkillParameter = function (output, context) {
  return {
    ParameterKey: output.ParameterKey !== undefined && output.ParameterKey !== null ? output.ParameterKey : undefined,
    ParameterValue:
      output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
  };
};
var deserializeAws_json1_1RoomSkillParameters = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1RoomSkillParameter(entry, context);
    });
};
var deserializeAws_json1_1SampleUtterances = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1SearchAddressBooksResponse = function (output, context) {
  return {
    AddressBooks:
      output.AddressBooks !== undefined && output.AddressBooks !== null
        ? deserializeAws_json1_1AddressBookDataList(output.AddressBooks, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchContactsResponse = function (output, context) {
  return {
    Contacts:
      output.Contacts !== undefined && output.Contacts !== null
        ? deserializeAws_json1_1ContactDataList(output.Contacts, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchDevicesResponse = function (output, context) {
  return {
    Devices:
      output.Devices !== undefined && output.Devices !== null
        ? deserializeAws_json1_1DeviceDataList(output.Devices, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchNetworkProfilesResponse = function (output, context) {
  return {
    NetworkProfiles:
      output.NetworkProfiles !== undefined && output.NetworkProfiles !== null
        ? deserializeAws_json1_1NetworkProfileDataList(output.NetworkProfiles, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchProfilesResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Profiles:
      output.Profiles !== undefined && output.Profiles !== null
        ? deserializeAws_json1_1ProfileDataList(output.Profiles, context)
        : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchRoomsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Rooms:
      output.Rooms !== undefined && output.Rooms !== null
        ? deserializeAws_json1_1RoomDataList(output.Rooms, context)
        : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchSkillGroupsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SkillGroups:
      output.SkillGroups !== undefined && output.SkillGroups !== null
        ? deserializeAws_json1_1SkillGroupDataList(output.SkillGroups, context)
        : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  };
};
var deserializeAws_json1_1SearchUsersResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserDataList(output.Users, context)
        : undefined,
  };
};
var deserializeAws_json1_1SendAnnouncementResponse = function (output, context) {
  return {
    AnnouncementArn:
      output.AnnouncementArn !== undefined && output.AnnouncementArn !== null ? output.AnnouncementArn : undefined,
  };
};
var deserializeAws_json1_1SendInvitationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1ShortSkillIdList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1SipAddress = function (output, context) {
  return {
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Uri: output.Uri !== undefined && output.Uri !== null ? output.Uri : undefined,
  };
};
var deserializeAws_json1_1SipAddressList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SipAddress(entry, context);
    });
};
var deserializeAws_json1_1SkillDetails = function (output, context) {
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
var deserializeAws_json1_1SkillGroup = function (output, context) {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    SkillGroupArn:
      output.SkillGroupArn !== undefined && output.SkillGroupArn !== null ? output.SkillGroupArn : undefined,
    SkillGroupName:
      output.SkillGroupName !== undefined && output.SkillGroupName !== null ? output.SkillGroupName : undefined,
  };
};
var deserializeAws_json1_1SkillGroupData = function (output, context) {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    SkillGroupArn:
      output.SkillGroupArn !== undefined && output.SkillGroupArn !== null ? output.SkillGroupArn : undefined,
    SkillGroupName:
      output.SkillGroupName !== undefined && output.SkillGroupName !== null ? output.SkillGroupName : undefined,
  };
};
var deserializeAws_json1_1SkillGroupDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SkillGroupData(entry, context);
    });
};
var deserializeAws_json1_1SkillNotLinkedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1SkillsStoreSkill = function (output, context) {
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
var deserializeAws_json1_1SkillsStoreSkillList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SkillsStoreSkill(entry, context);
    });
};
var deserializeAws_json1_1SkillSummary = function (output, context) {
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
var deserializeAws_json1_1SkillSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SkillSummary(entry, context);
    });
};
var deserializeAws_json1_1SkillTypes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1SmartHomeAppliance = function (output, context) {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    FriendlyName: output.FriendlyName !== undefined && output.FriendlyName !== null ? output.FriendlyName : undefined,
    ManufacturerName:
      output.ManufacturerName !== undefined && output.ManufacturerName !== null ? output.ManufacturerName : undefined,
  };
};
var deserializeAws_json1_1SmartHomeApplianceList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1SmartHomeAppliance(entry, context);
    });
};
var deserializeAws_json1_1StartDeviceSyncResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1Tag = function (output, context) {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_1TagList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1TrustAnchorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1UnauthorizedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateAddressBookResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateBusinessReportScheduleResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateConferenceProviderResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateContactResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateDeviceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateGatewayGroupResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateGatewayResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateNetworkProfileResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateProfileResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateRoomResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateSkillGroupResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UserData = function (output, context) {
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
var deserializeAws_json1_1UserDataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UserData(entry, context);
    });
};
var deserializeMetadata = function (output) {
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
var collectBody = function (streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          contents = {
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            path: path,
            headers: headers,
          };
          if (resolvedHostname !== undefined) {
            contents.hostname = resolvedHostname;
          }
          if (body !== undefined) {
            contents.body = body;
          }
          return [2 /*return*/, new __HttpRequest(contents)];
      }
    });
  });
};
var parseBody = function (streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
  var findKey = function (object, key) {
    return Object.keys(object).find(function (k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };
  var sanitizeErrorCode = function (rawValue) {
    var cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var headerKey = findKey(output.headers, "x-amzn-errortype");
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
