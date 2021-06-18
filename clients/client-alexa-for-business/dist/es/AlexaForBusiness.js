import { __extends } from "tslib";
import { AlexaForBusinessClient } from "./AlexaForBusinessClient";
import { ApproveSkillCommand } from "./commands/ApproveSkillCommand";
import { AssociateContactWithAddressBookCommand } from "./commands/AssociateContactWithAddressBookCommand";
import { AssociateDeviceWithNetworkProfileCommand } from "./commands/AssociateDeviceWithNetworkProfileCommand";
import { AssociateDeviceWithRoomCommand } from "./commands/AssociateDeviceWithRoomCommand";
import { AssociateSkillGroupWithRoomCommand } from "./commands/AssociateSkillGroupWithRoomCommand";
import { AssociateSkillWithSkillGroupCommand } from "./commands/AssociateSkillWithSkillGroupCommand";
import { AssociateSkillWithUsersCommand } from "./commands/AssociateSkillWithUsersCommand";
import { CreateAddressBookCommand } from "./commands/CreateAddressBookCommand";
import { CreateBusinessReportScheduleCommand } from "./commands/CreateBusinessReportScheduleCommand";
import { CreateConferenceProviderCommand } from "./commands/CreateConferenceProviderCommand";
import { CreateContactCommand } from "./commands/CreateContactCommand";
import { CreateGatewayGroupCommand } from "./commands/CreateGatewayGroupCommand";
import { CreateNetworkProfileCommand } from "./commands/CreateNetworkProfileCommand";
import { CreateProfileCommand } from "./commands/CreateProfileCommand";
import { CreateRoomCommand } from "./commands/CreateRoomCommand";
import { CreateSkillGroupCommand } from "./commands/CreateSkillGroupCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteAddressBookCommand } from "./commands/DeleteAddressBookCommand";
import { DeleteBusinessReportScheduleCommand } from "./commands/DeleteBusinessReportScheduleCommand";
import { DeleteConferenceProviderCommand } from "./commands/DeleteConferenceProviderCommand";
import { DeleteContactCommand } from "./commands/DeleteContactCommand";
import { DeleteDeviceCommand } from "./commands/DeleteDeviceCommand";
import { DeleteDeviceUsageDataCommand } from "./commands/DeleteDeviceUsageDataCommand";
import { DeleteGatewayGroupCommand } from "./commands/DeleteGatewayGroupCommand";
import { DeleteNetworkProfileCommand } from "./commands/DeleteNetworkProfileCommand";
import { DeleteProfileCommand } from "./commands/DeleteProfileCommand";
import { DeleteRoomCommand } from "./commands/DeleteRoomCommand";
import { DeleteRoomSkillParameterCommand } from "./commands/DeleteRoomSkillParameterCommand";
import { DeleteSkillAuthorizationCommand } from "./commands/DeleteSkillAuthorizationCommand";
import { DeleteSkillGroupCommand } from "./commands/DeleteSkillGroupCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DisassociateContactFromAddressBookCommand } from "./commands/DisassociateContactFromAddressBookCommand";
import { DisassociateDeviceFromRoomCommand } from "./commands/DisassociateDeviceFromRoomCommand";
import { DisassociateSkillFromSkillGroupCommand } from "./commands/DisassociateSkillFromSkillGroupCommand";
import { DisassociateSkillFromUsersCommand } from "./commands/DisassociateSkillFromUsersCommand";
import { DisassociateSkillGroupFromRoomCommand } from "./commands/DisassociateSkillGroupFromRoomCommand";
import { ForgetSmartHomeAppliancesCommand } from "./commands/ForgetSmartHomeAppliancesCommand";
import { GetAddressBookCommand } from "./commands/GetAddressBookCommand";
import { GetConferencePreferenceCommand } from "./commands/GetConferencePreferenceCommand";
import { GetConferenceProviderCommand } from "./commands/GetConferenceProviderCommand";
import { GetContactCommand } from "./commands/GetContactCommand";
import { GetDeviceCommand } from "./commands/GetDeviceCommand";
import { GetGatewayCommand } from "./commands/GetGatewayCommand";
import { GetGatewayGroupCommand } from "./commands/GetGatewayGroupCommand";
import { GetInvitationConfigurationCommand } from "./commands/GetInvitationConfigurationCommand";
import { GetNetworkProfileCommand } from "./commands/GetNetworkProfileCommand";
import { GetProfileCommand } from "./commands/GetProfileCommand";
import { GetRoomCommand } from "./commands/GetRoomCommand";
import { GetRoomSkillParameterCommand } from "./commands/GetRoomSkillParameterCommand";
import { GetSkillGroupCommand } from "./commands/GetSkillGroupCommand";
import { ListBusinessReportSchedulesCommand } from "./commands/ListBusinessReportSchedulesCommand";
import { ListConferenceProvidersCommand } from "./commands/ListConferenceProvidersCommand";
import { ListDeviceEventsCommand } from "./commands/ListDeviceEventsCommand";
import { ListGatewayGroupsCommand } from "./commands/ListGatewayGroupsCommand";
import { ListGatewaysCommand } from "./commands/ListGatewaysCommand";
import { ListSkillsCommand } from "./commands/ListSkillsCommand";
import { ListSkillsStoreCategoriesCommand } from "./commands/ListSkillsStoreCategoriesCommand";
import { ListSkillsStoreSkillsByCategoryCommand } from "./commands/ListSkillsStoreSkillsByCategoryCommand";
import { ListSmartHomeAppliancesCommand } from "./commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PutConferencePreferenceCommand } from "./commands/PutConferencePreferenceCommand";
import { PutInvitationConfigurationCommand } from "./commands/PutInvitationConfigurationCommand";
import { PutRoomSkillParameterCommand } from "./commands/PutRoomSkillParameterCommand";
import { PutSkillAuthorizationCommand } from "./commands/PutSkillAuthorizationCommand";
import { RegisterAVSDeviceCommand } from "./commands/RegisterAVSDeviceCommand";
import { RejectSkillCommand } from "./commands/RejectSkillCommand";
import { ResolveRoomCommand } from "./commands/ResolveRoomCommand";
import { RevokeInvitationCommand } from "./commands/RevokeInvitationCommand";
import { SearchAddressBooksCommand } from "./commands/SearchAddressBooksCommand";
import { SearchContactsCommand } from "./commands/SearchContactsCommand";
import { SearchDevicesCommand } from "./commands/SearchDevicesCommand";
import { SearchNetworkProfilesCommand } from "./commands/SearchNetworkProfilesCommand";
import { SearchProfilesCommand } from "./commands/SearchProfilesCommand";
import { SearchRoomsCommand } from "./commands/SearchRoomsCommand";
import { SearchSkillGroupsCommand } from "./commands/SearchSkillGroupsCommand";
import { SearchUsersCommand } from "./commands/SearchUsersCommand";
import { SendAnnouncementCommand } from "./commands/SendAnnouncementCommand";
import { SendInvitationCommand } from "./commands/SendInvitationCommand";
import { StartDeviceSyncCommand } from "./commands/StartDeviceSyncCommand";
import { StartSmartHomeApplianceDiscoveryCommand } from "./commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAddressBookCommand } from "./commands/UpdateAddressBookCommand";
import { UpdateBusinessReportScheduleCommand } from "./commands/UpdateBusinessReportScheduleCommand";
import { UpdateConferenceProviderCommand } from "./commands/UpdateConferenceProviderCommand";
import { UpdateContactCommand } from "./commands/UpdateContactCommand";
import { UpdateDeviceCommand } from "./commands/UpdateDeviceCommand";
import { UpdateGatewayCommand } from "./commands/UpdateGatewayCommand";
import { UpdateGatewayGroupCommand } from "./commands/UpdateGatewayGroupCommand";
import { UpdateNetworkProfileCommand } from "./commands/UpdateNetworkProfileCommand";
import { UpdateProfileCommand } from "./commands/UpdateProfileCommand";
import { UpdateRoomCommand } from "./commands/UpdateRoomCommand";
import { UpdateSkillGroupCommand } from "./commands/UpdateSkillGroupCommand";
/**
 * <p>Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools
 *          to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your
 *          own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations.
 *          You can also make these available as private skills for your organization. Alexa for Business makes it
 *          efficient to voice-enable your products and services, thus providing context-aware voice
 *          experiences for your customers. Device makers building with the Alexa Voice Service (AVS)
 *          can create fully integrated solutions, register their products with Alexa for Business, and manage them
 *          as shared devices in their organization. </p>
 */
var AlexaForBusiness = /** @class */ (function (_super) {
  __extends(AlexaForBusiness, _super);
  function AlexaForBusiness() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AlexaForBusiness.prototype.approveSkill = function (args, optionsOrCb, cb) {
    var command = new ApproveSkillCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.associateContactWithAddressBook = function (args, optionsOrCb, cb) {
    var command = new AssociateContactWithAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.associateDeviceWithNetworkProfile = function (args, optionsOrCb, cb) {
    var command = new AssociateDeviceWithNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.associateDeviceWithRoom = function (args, optionsOrCb, cb) {
    var command = new AssociateDeviceWithRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.associateSkillGroupWithRoom = function (args, optionsOrCb, cb) {
    var command = new AssociateSkillGroupWithRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.associateSkillWithSkillGroup = function (args, optionsOrCb, cb) {
    var command = new AssociateSkillWithSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.associateSkillWithUsers = function (args, optionsOrCb, cb) {
    var command = new AssociateSkillWithUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createAddressBook = function (args, optionsOrCb, cb) {
    var command = new CreateAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createBusinessReportSchedule = function (args, optionsOrCb, cb) {
    var command = new CreateBusinessReportScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createConferenceProvider = function (args, optionsOrCb, cb) {
    var command = new CreateConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createContact = function (args, optionsOrCb, cb) {
    var command = new CreateContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createGatewayGroup = function (args, optionsOrCb, cb) {
    var command = new CreateGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createNetworkProfile = function (args, optionsOrCb, cb) {
    var command = new CreateNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createProfile = function (args, optionsOrCb, cb) {
    var command = new CreateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createRoom = function (args, optionsOrCb, cb) {
    var command = new CreateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createSkillGroup = function (args, optionsOrCb, cb) {
    var command = new CreateSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.createUser = function (args, optionsOrCb, cb) {
    var command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteAddressBook = function (args, optionsOrCb, cb) {
    var command = new DeleteAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteBusinessReportSchedule = function (args, optionsOrCb, cb) {
    var command = new DeleteBusinessReportScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteConferenceProvider = function (args, optionsOrCb, cb) {
    var command = new DeleteConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteContact = function (args, optionsOrCb, cb) {
    var command = new DeleteContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteDevice = function (args, optionsOrCb, cb) {
    var command = new DeleteDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteDeviceUsageData = function (args, optionsOrCb, cb) {
    var command = new DeleteDeviceUsageDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteGatewayGroup = function (args, optionsOrCb, cb) {
    var command = new DeleteGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteNetworkProfile = function (args, optionsOrCb, cb) {
    var command = new DeleteNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteProfile = function (args, optionsOrCb, cb) {
    var command = new DeleteProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteRoom = function (args, optionsOrCb, cb) {
    var command = new DeleteRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteRoomSkillParameter = function (args, optionsOrCb, cb) {
    var command = new DeleteRoomSkillParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteSkillAuthorization = function (args, optionsOrCb, cb) {
    var command = new DeleteSkillAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteSkillGroup = function (args, optionsOrCb, cb) {
    var command = new DeleteSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.deleteUser = function (args, optionsOrCb, cb) {
    var command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.disassociateContactFromAddressBook = function (args, optionsOrCb, cb) {
    var command = new DisassociateContactFromAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.disassociateDeviceFromRoom = function (args, optionsOrCb, cb) {
    var command = new DisassociateDeviceFromRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.disassociateSkillFromSkillGroup = function (args, optionsOrCb, cb) {
    var command = new DisassociateSkillFromSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.disassociateSkillFromUsers = function (args, optionsOrCb, cb) {
    var command = new DisassociateSkillFromUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.disassociateSkillGroupFromRoom = function (args, optionsOrCb, cb) {
    var command = new DisassociateSkillGroupFromRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.forgetSmartHomeAppliances = function (args, optionsOrCb, cb) {
    var command = new ForgetSmartHomeAppliancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getAddressBook = function (args, optionsOrCb, cb) {
    var command = new GetAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getConferencePreference = function (args, optionsOrCb, cb) {
    var command = new GetConferencePreferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getConferenceProvider = function (args, optionsOrCb, cb) {
    var command = new GetConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getContact = function (args, optionsOrCb, cb) {
    var command = new GetContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getDevice = function (args, optionsOrCb, cb) {
    var command = new GetDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getGateway = function (args, optionsOrCb, cb) {
    var command = new GetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getGatewayGroup = function (args, optionsOrCb, cb) {
    var command = new GetGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getInvitationConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetInvitationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getNetworkProfile = function (args, optionsOrCb, cb) {
    var command = new GetNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getProfile = function (args, optionsOrCb, cb) {
    var command = new GetProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getRoom = function (args, optionsOrCb, cb) {
    var command = new GetRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getRoomSkillParameter = function (args, optionsOrCb, cb) {
    var command = new GetRoomSkillParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.getSkillGroup = function (args, optionsOrCb, cb) {
    var command = new GetSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listBusinessReportSchedules = function (args, optionsOrCb, cb) {
    var command = new ListBusinessReportSchedulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listConferenceProviders = function (args, optionsOrCb, cb) {
    var command = new ListConferenceProvidersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listDeviceEvents = function (args, optionsOrCb, cb) {
    var command = new ListDeviceEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listGatewayGroups = function (args, optionsOrCb, cb) {
    var command = new ListGatewayGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listGateways = function (args, optionsOrCb, cb) {
    var command = new ListGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listSkills = function (args, optionsOrCb, cb) {
    var command = new ListSkillsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listSkillsStoreCategories = function (args, optionsOrCb, cb) {
    var command = new ListSkillsStoreCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listSkillsStoreSkillsByCategory = function (args, optionsOrCb, cb) {
    var command = new ListSkillsStoreSkillsByCategoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listSmartHomeAppliances = function (args, optionsOrCb, cb) {
    var command = new ListSmartHomeAppliancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.listTags = function (args, optionsOrCb, cb) {
    var command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.putConferencePreference = function (args, optionsOrCb, cb) {
    var command = new PutConferencePreferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.putInvitationConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutInvitationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.putRoomSkillParameter = function (args, optionsOrCb, cb) {
    var command = new PutRoomSkillParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.putSkillAuthorization = function (args, optionsOrCb, cb) {
    var command = new PutSkillAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.registerAVSDevice = function (args, optionsOrCb, cb) {
    var command = new RegisterAVSDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.rejectSkill = function (args, optionsOrCb, cb) {
    var command = new RejectSkillCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.resolveRoom = function (args, optionsOrCb, cb) {
    var command = new ResolveRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.revokeInvitation = function (args, optionsOrCb, cb) {
    var command = new RevokeInvitationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchAddressBooks = function (args, optionsOrCb, cb) {
    var command = new SearchAddressBooksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchContacts = function (args, optionsOrCb, cb) {
    var command = new SearchContactsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchDevices = function (args, optionsOrCb, cb) {
    var command = new SearchDevicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchNetworkProfiles = function (args, optionsOrCb, cb) {
    var command = new SearchNetworkProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchProfiles = function (args, optionsOrCb, cb) {
    var command = new SearchProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchRooms = function (args, optionsOrCb, cb) {
    var command = new SearchRoomsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchSkillGroups = function (args, optionsOrCb, cb) {
    var command = new SearchSkillGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.searchUsers = function (args, optionsOrCb, cb) {
    var command = new SearchUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.sendAnnouncement = function (args, optionsOrCb, cb) {
    var command = new SendAnnouncementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.sendInvitation = function (args, optionsOrCb, cb) {
    var command = new SendInvitationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.startDeviceSync = function (args, optionsOrCb, cb) {
    var command = new StartDeviceSyncCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.startSmartHomeApplianceDiscovery = function (args, optionsOrCb, cb) {
    var command = new StartSmartHomeApplianceDiscoveryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateAddressBook = function (args, optionsOrCb, cb) {
    var command = new UpdateAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateBusinessReportSchedule = function (args, optionsOrCb, cb) {
    var command = new UpdateBusinessReportScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateConferenceProvider = function (args, optionsOrCb, cb) {
    var command = new UpdateConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateContact = function (args, optionsOrCb, cb) {
    var command = new UpdateContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateDevice = function (args, optionsOrCb, cb) {
    var command = new UpdateDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateGateway = function (args, optionsOrCb, cb) {
    var command = new UpdateGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateGatewayGroup = function (args, optionsOrCb, cb) {
    var command = new UpdateGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateNetworkProfile = function (args, optionsOrCb, cb) {
    var command = new UpdateNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateProfile = function (args, optionsOrCb, cb) {
    var command = new UpdateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateRoom = function (args, optionsOrCb, cb) {
    var command = new UpdateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AlexaForBusiness.prototype.updateSkillGroup = function (args, optionsOrCb, cb) {
    var command = new UpdateSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AlexaForBusiness;
})(AlexaForBusinessClient);
export { AlexaForBusiness };
//# sourceMappingURL=AlexaForBusiness.js.map
