import { ApproveSkillCommandInput, ApproveSkillCommandOutput } from "../commands/ApproveSkillCommand";
import {
  AssociateContactWithAddressBookCommandInput,
  AssociateContactWithAddressBookCommandOutput,
} from "../commands/AssociateContactWithAddressBookCommand";
import {
  AssociateDeviceWithNetworkProfileCommandInput,
  AssociateDeviceWithNetworkProfileCommandOutput,
} from "../commands/AssociateDeviceWithNetworkProfileCommand";
import {
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
} from "../commands/AssociateDeviceWithRoomCommand";
import {
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
} from "../commands/AssociateSkillGroupWithRoomCommand";
import {
  AssociateSkillWithSkillGroupCommandInput,
  AssociateSkillWithSkillGroupCommandOutput,
} from "../commands/AssociateSkillWithSkillGroupCommand";
import {
  AssociateSkillWithUsersCommandInput,
  AssociateSkillWithUsersCommandOutput,
} from "../commands/AssociateSkillWithUsersCommand";
import { CreateAddressBookCommandInput, CreateAddressBookCommandOutput } from "../commands/CreateAddressBookCommand";
import {
  CreateBusinessReportScheduleCommandInput,
  CreateBusinessReportScheduleCommandOutput,
} from "../commands/CreateBusinessReportScheduleCommand";
import {
  CreateConferenceProviderCommandInput,
  CreateConferenceProviderCommandOutput,
} from "../commands/CreateConferenceProviderCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "../commands/CreateContactCommand";
import { CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput } from "../commands/CreateGatewayGroupCommand";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "../commands/CreateNetworkProfileCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "../commands/CreateRoomCommand";
import { CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput } from "../commands/CreateSkillGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput } from "../commands/DeleteAddressBookCommand";
import {
  DeleteBusinessReportScheduleCommandInput,
  DeleteBusinessReportScheduleCommandOutput,
} from "../commands/DeleteBusinessReportScheduleCommand";
import {
  DeleteConferenceProviderCommandInput,
  DeleteConferenceProviderCommandOutput,
} from "../commands/DeleteConferenceProviderCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "../commands/DeleteContactCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import {
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
} from "../commands/DeleteDeviceUsageDataCommand";
import { DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput } from "../commands/DeleteGatewayGroupCommand";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "../commands/DeleteNetworkProfileCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "../commands/DeleteRoomCommand";
import {
  DeleteRoomSkillParameterCommandInput,
  DeleteRoomSkillParameterCommandOutput,
} from "../commands/DeleteRoomSkillParameterCommand";
import {
  DeleteSkillAuthorizationCommandInput,
  DeleteSkillAuthorizationCommandOutput,
} from "../commands/DeleteSkillAuthorizationCommand";
import { DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput } from "../commands/DeleteSkillGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DisassociateContactFromAddressBookCommandInput,
  DisassociateContactFromAddressBookCommandOutput,
} from "../commands/DisassociateContactFromAddressBookCommand";
import {
  DisassociateDeviceFromRoomCommandInput,
  DisassociateDeviceFromRoomCommandOutput,
} from "../commands/DisassociateDeviceFromRoomCommand";
import {
  DisassociateSkillFromSkillGroupCommandInput,
  DisassociateSkillFromSkillGroupCommandOutput,
} from "../commands/DisassociateSkillFromSkillGroupCommand";
import {
  DisassociateSkillFromUsersCommandInput,
  DisassociateSkillFromUsersCommandOutput,
} from "../commands/DisassociateSkillFromUsersCommand";
import {
  DisassociateSkillGroupFromRoomCommandInput,
  DisassociateSkillGroupFromRoomCommandOutput,
} from "../commands/DisassociateSkillGroupFromRoomCommand";
import {
  ForgetSmartHomeAppliancesCommandInput,
  ForgetSmartHomeAppliancesCommandOutput,
} from "../commands/ForgetSmartHomeAppliancesCommand";
import { GetAddressBookCommandInput, GetAddressBookCommandOutput } from "../commands/GetAddressBookCommand";
import {
  GetConferencePreferenceCommandInput,
  GetConferencePreferenceCommandOutput,
} from "../commands/GetConferencePreferenceCommand";
import {
  GetConferenceProviderCommandInput,
  GetConferenceProviderCommandOutput,
} from "../commands/GetConferenceProviderCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "../commands/GetContactCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "../commands/GetGatewayCommand";
import { GetGatewayGroupCommandInput, GetGatewayGroupCommandOutput } from "../commands/GetGatewayGroupCommand";
import {
  GetInvitationConfigurationCommandInput,
  GetInvitationConfigurationCommandOutput,
} from "../commands/GetInvitationConfigurationCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "../commands/GetNetworkProfileCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "../commands/GetRoomCommand";
import {
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
} from "../commands/GetRoomSkillParameterCommand";
import { GetSkillGroupCommandInput, GetSkillGroupCommandOutput } from "../commands/GetSkillGroupCommand";
import {
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "../commands/ListBusinessReportSchedulesCommand";
import {
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "../commands/ListConferenceProvidersCommand";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "../commands/ListDeviceEventsCommand";
import { ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput } from "../commands/ListGatewayGroupsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListSkillsCommandInput, ListSkillsCommandOutput } from "../commands/ListSkillsCommand";
import {
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "../commands/ListSkillsStoreCategoriesCommand";
import {
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand";
import {
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "../commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
} from "../commands/PutConferencePreferenceCommand";
import {
  PutInvitationConfigurationCommandInput,
  PutInvitationConfigurationCommandOutput,
} from "../commands/PutInvitationConfigurationCommand";
import {
  PutRoomSkillParameterCommandInput,
  PutRoomSkillParameterCommandOutput,
} from "../commands/PutRoomSkillParameterCommand";
import {
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
} from "../commands/PutSkillAuthorizationCommand";
import { RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput } from "../commands/RegisterAVSDeviceCommand";
import { RejectSkillCommandInput, RejectSkillCommandOutput } from "../commands/RejectSkillCommand";
import { ResolveRoomCommandInput, ResolveRoomCommandOutput } from "../commands/ResolveRoomCommand";
import { RevokeInvitationCommandInput, RevokeInvitationCommandOutput } from "../commands/RevokeInvitationCommand";
import { SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput } from "../commands/SearchAddressBooksCommand";
import { SearchContactsCommandInput, SearchContactsCommandOutput } from "../commands/SearchContactsCommand";
import { SearchDevicesCommandInput, SearchDevicesCommandOutput } from "../commands/SearchDevicesCommand";
import {
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "../commands/SearchNetworkProfilesCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "../commands/SearchProfilesCommand";
import { SearchRoomsCommandInput, SearchRoomsCommandOutput } from "../commands/SearchRoomsCommand";
import { SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput } from "../commands/SearchSkillGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { SendAnnouncementCommandInput, SendAnnouncementCommandOutput } from "../commands/SendAnnouncementCommand";
import { SendInvitationCommandInput, SendInvitationCommandOutput } from "../commands/SendInvitationCommand";
import { StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput } from "../commands/StartDeviceSyncCommand";
import {
  StartSmartHomeApplianceDiscoveryCommandInput,
  StartSmartHomeApplianceDiscoveryCommandOutput,
} from "../commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput } from "../commands/UpdateAddressBookCommand";
import {
  UpdateBusinessReportScheduleCommandInput,
  UpdateBusinessReportScheduleCommandOutput,
} from "../commands/UpdateBusinessReportScheduleCommand";
import {
  UpdateConferenceProviderCommandInput,
  UpdateConferenceProviderCommandOutput,
} from "../commands/UpdateConferenceProviderCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "../commands/UpdateContactCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "../commands/UpdateDeviceCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "../commands/UpdateGatewayCommand";
import { UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput } from "../commands/UpdateGatewayGroupCommand";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "../commands/UpdateNetworkProfileCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "../commands/UpdateRoomCommand";
import { UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput } from "../commands/UpdateSkillGroupCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1ApproveSkillCommand: (
  input: ApproveSkillCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateContactWithAddressBookCommand: (
  input: AssociateContactWithAddressBookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand: (
  input: AssociateDeviceWithNetworkProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateDeviceWithRoomCommand: (
  input: AssociateDeviceWithRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateSkillGroupWithRoomCommand: (
  input: AssociateSkillGroupWithRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateSkillWithSkillGroupCommand: (
  input: AssociateSkillWithSkillGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateSkillWithUsersCommand: (
  input: AssociateSkillWithUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateAddressBookCommand: (
  input: CreateAddressBookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateBusinessReportScheduleCommand: (
  input: CreateBusinessReportScheduleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateConferenceProviderCommand: (
  input: CreateConferenceProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateContactCommand: (
  input: CreateContactCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateGatewayGroupCommand: (
  input: CreateGatewayGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateNetworkProfileCommand: (
  input: CreateNetworkProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateProfileCommand: (
  input: CreateProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateRoomCommand: (
  input: CreateRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateSkillGroupCommand: (
  input: CreateSkillGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateUserCommand: (
  input: CreateUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteAddressBookCommand: (
  input: DeleteAddressBookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteBusinessReportScheduleCommand: (
  input: DeleteBusinessReportScheduleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteConferenceProviderCommand: (
  input: DeleteConferenceProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteContactCommand: (
  input: DeleteContactCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteDeviceCommand: (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteDeviceUsageDataCommand: (
  input: DeleteDeviceUsageDataCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteGatewayGroupCommand: (
  input: DeleteGatewayGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteNetworkProfileCommand: (
  input: DeleteNetworkProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteProfileCommand: (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteRoomCommand: (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteRoomSkillParameterCommand: (
  input: DeleteRoomSkillParameterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteSkillAuthorizationCommand: (
  input: DeleteSkillAuthorizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteSkillGroupCommand: (
  input: DeleteSkillGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteUserCommand: (
  input: DeleteUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateContactFromAddressBookCommand: (
  input: DisassociateContactFromAddressBookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateDeviceFromRoomCommand: (
  input: DisassociateDeviceFromRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateSkillFromSkillGroupCommand: (
  input: DisassociateSkillFromSkillGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateSkillFromUsersCommand: (
  input: DisassociateSkillFromUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateSkillGroupFromRoomCommand: (
  input: DisassociateSkillGroupFromRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ForgetSmartHomeAppliancesCommand: (
  input: ForgetSmartHomeAppliancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetAddressBookCommand: (
  input: GetAddressBookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetConferencePreferenceCommand: (
  input: GetConferencePreferenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetConferenceProviderCommand: (
  input: GetConferenceProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetContactCommand: (
  input: GetContactCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDeviceCommand: (
  input: GetDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetGatewayCommand: (
  input: GetGatewayCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetGatewayGroupCommand: (
  input: GetGatewayGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetInvitationConfigurationCommand: (
  input: GetInvitationConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetNetworkProfileCommand: (
  input: GetNetworkProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetProfileCommand: (
  input: GetProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetRoomCommand: (
  input: GetRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetRoomSkillParameterCommand: (
  input: GetRoomSkillParameterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetSkillGroupCommand: (
  input: GetSkillGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListBusinessReportSchedulesCommand: (
  input: ListBusinessReportSchedulesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListConferenceProvidersCommand: (
  input: ListConferenceProvidersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListDeviceEventsCommand: (
  input: ListDeviceEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListGatewayGroupsCommand: (
  input: ListGatewayGroupsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListGatewaysCommand: (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListSkillsCommand: (
  input: ListSkillsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListSkillsStoreCategoriesCommand: (
  input: ListSkillsStoreCategoriesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand: (
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListSmartHomeAppliancesCommand: (
  input: ListSmartHomeAppliancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsCommand: (
  input: ListTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutConferencePreferenceCommand: (
  input: PutConferencePreferenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutInvitationConfigurationCommand: (
  input: PutInvitationConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutRoomSkillParameterCommand: (
  input: PutRoomSkillParameterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutSkillAuthorizationCommand: (
  input: PutSkillAuthorizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RegisterAVSDeviceCommand: (
  input: RegisterAVSDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RejectSkillCommand: (
  input: RejectSkillCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ResolveRoomCommand: (
  input: ResolveRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RevokeInvitationCommand: (
  input: RevokeInvitationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchAddressBooksCommand: (
  input: SearchAddressBooksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchContactsCommand: (
  input: SearchContactsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchDevicesCommand: (
  input: SearchDevicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchNetworkProfilesCommand: (
  input: SearchNetworkProfilesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchProfilesCommand: (
  input: SearchProfilesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchRoomsCommand: (
  input: SearchRoomsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchSkillGroupsCommand: (
  input: SearchSkillGroupsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchUsersCommand: (
  input: SearchUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SendAnnouncementCommand: (
  input: SendAnnouncementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SendInvitationCommand: (
  input: SendInvitationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartDeviceSyncCommand: (
  input: StartDeviceSyncCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand: (
  input: StartSmartHomeApplianceDiscoveryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateAddressBookCommand: (
  input: UpdateAddressBookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateBusinessReportScheduleCommand: (
  input: UpdateBusinessReportScheduleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateConferenceProviderCommand: (
  input: UpdateConferenceProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateContactCommand: (
  input: UpdateContactCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateDeviceCommand: (
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateGatewayCommand: (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateGatewayGroupCommand: (
  input: UpdateGatewayGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateNetworkProfileCommand: (
  input: UpdateNetworkProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateProfileCommand: (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateRoomCommand: (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateSkillGroupCommand: (
  input: UpdateSkillGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1ApproveSkillCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ApproveSkillCommandOutput>;
export declare const deserializeAws_json1_1AssociateContactWithAddressBookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateContactWithAddressBookCommandOutput>;
export declare const deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateDeviceWithNetworkProfileCommandOutput>;
export declare const deserializeAws_json1_1AssociateDeviceWithRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateDeviceWithRoomCommandOutput>;
export declare const deserializeAws_json1_1AssociateSkillGroupWithRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateSkillGroupWithRoomCommandOutput>;
export declare const deserializeAws_json1_1AssociateSkillWithSkillGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateSkillWithSkillGroupCommandOutput>;
export declare const deserializeAws_json1_1AssociateSkillWithUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateSkillWithUsersCommandOutput>;
export declare const deserializeAws_json1_1CreateAddressBookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAddressBookCommandOutput>;
export declare const deserializeAws_json1_1CreateBusinessReportScheduleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBusinessReportScheduleCommandOutput>;
export declare const deserializeAws_json1_1CreateConferenceProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateConferenceProviderCommandOutput>;
export declare const deserializeAws_json1_1CreateContactCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateContactCommandOutput>;
export declare const deserializeAws_json1_1CreateGatewayGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateGatewayGroupCommandOutput>;
export declare const deserializeAws_json1_1CreateNetworkProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateNetworkProfileCommandOutput>;
export declare const deserializeAws_json1_1CreateProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateProfileCommandOutput>;
export declare const deserializeAws_json1_1CreateRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateRoomCommandOutput>;
export declare const deserializeAws_json1_1CreateSkillGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateSkillGroupCommandOutput>;
export declare const deserializeAws_json1_1CreateUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserCommandOutput>;
export declare const deserializeAws_json1_1DeleteAddressBookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAddressBookCommandOutput>;
export declare const deserializeAws_json1_1DeleteBusinessReportScheduleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBusinessReportScheduleCommandOutput>;
export declare const deserializeAws_json1_1DeleteConferenceProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteConferenceProviderCommandOutput>;
export declare const deserializeAws_json1_1DeleteContactCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteContactCommandOutput>;
export declare const deserializeAws_json1_1DeleteDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDeviceCommandOutput>;
export declare const deserializeAws_json1_1DeleteDeviceUsageDataCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDeviceUsageDataCommandOutput>;
export declare const deserializeAws_json1_1DeleteGatewayGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteGatewayGroupCommandOutput>;
export declare const deserializeAws_json1_1DeleteNetworkProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteNetworkProfileCommandOutput>;
export declare const deserializeAws_json1_1DeleteProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteProfileCommandOutput>;
export declare const deserializeAws_json1_1DeleteRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRoomCommandOutput>;
export declare const deserializeAws_json1_1DeleteRoomSkillParameterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRoomSkillParameterCommandOutput>;
export declare const deserializeAws_json1_1DeleteSkillAuthorizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSkillAuthorizationCommandOutput>;
export declare const deserializeAws_json1_1DeleteSkillGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSkillGroupCommandOutput>;
export declare const deserializeAws_json1_1DeleteUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserCommandOutput>;
export declare const deserializeAws_json1_1DisassociateContactFromAddressBookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateContactFromAddressBookCommandOutput>;
export declare const deserializeAws_json1_1DisassociateDeviceFromRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateDeviceFromRoomCommandOutput>;
export declare const deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateSkillFromSkillGroupCommandOutput>;
export declare const deserializeAws_json1_1DisassociateSkillFromUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateSkillFromUsersCommandOutput>;
export declare const deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateSkillGroupFromRoomCommandOutput>;
export declare const deserializeAws_json1_1ForgetSmartHomeAppliancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ForgetSmartHomeAppliancesCommandOutput>;
export declare const deserializeAws_json1_1GetAddressBookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAddressBookCommandOutput>;
export declare const deserializeAws_json1_1GetConferencePreferenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetConferencePreferenceCommandOutput>;
export declare const deserializeAws_json1_1GetConferenceProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetConferenceProviderCommandOutput>;
export declare const deserializeAws_json1_1GetContactCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetContactCommandOutput>;
export declare const deserializeAws_json1_1GetDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeviceCommandOutput>;
export declare const deserializeAws_json1_1GetGatewayCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGatewayCommandOutput>;
export declare const deserializeAws_json1_1GetGatewayGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGatewayGroupCommandOutput>;
export declare const deserializeAws_json1_1GetInvitationConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetInvitationConfigurationCommandOutput>;
export declare const deserializeAws_json1_1GetNetworkProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetNetworkProfileCommandOutput>;
export declare const deserializeAws_json1_1GetProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetProfileCommandOutput>;
export declare const deserializeAws_json1_1GetRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRoomCommandOutput>;
export declare const deserializeAws_json1_1GetRoomSkillParameterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRoomSkillParameterCommandOutput>;
export declare const deserializeAws_json1_1GetSkillGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSkillGroupCommandOutput>;
export declare const deserializeAws_json1_1ListBusinessReportSchedulesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBusinessReportSchedulesCommandOutput>;
export declare const deserializeAws_json1_1ListConferenceProvidersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListConferenceProvidersCommandOutput>;
export declare const deserializeAws_json1_1ListDeviceEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDeviceEventsCommandOutput>;
export declare const deserializeAws_json1_1ListGatewayGroupsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGatewayGroupsCommandOutput>;
export declare const deserializeAws_json1_1ListGatewaysCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGatewaysCommandOutput>;
export declare const deserializeAws_json1_1ListSkillsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSkillsCommandOutput>;
export declare const deserializeAws_json1_1ListSkillsStoreCategoriesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSkillsStoreCategoriesCommandOutput>;
export declare const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSkillsStoreSkillsByCategoryCommandOutput>;
export declare const deserializeAws_json1_1ListSmartHomeAppliancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSmartHomeAppliancesCommandOutput>;
export declare const deserializeAws_json1_1ListTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsCommandOutput>;
export declare const deserializeAws_json1_1PutConferencePreferenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutConferencePreferenceCommandOutput>;
export declare const deserializeAws_json1_1PutInvitationConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutInvitationConfigurationCommandOutput>;
export declare const deserializeAws_json1_1PutRoomSkillParameterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRoomSkillParameterCommandOutput>;
export declare const deserializeAws_json1_1PutSkillAuthorizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutSkillAuthorizationCommandOutput>;
export declare const deserializeAws_json1_1RegisterAVSDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterAVSDeviceCommandOutput>;
export declare const deserializeAws_json1_1RejectSkillCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RejectSkillCommandOutput>;
export declare const deserializeAws_json1_1ResolveRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResolveRoomCommandOutput>;
export declare const deserializeAws_json1_1RevokeInvitationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RevokeInvitationCommandOutput>;
export declare const deserializeAws_json1_1SearchAddressBooksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchAddressBooksCommandOutput>;
export declare const deserializeAws_json1_1SearchContactsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchContactsCommandOutput>;
export declare const deserializeAws_json1_1SearchDevicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchDevicesCommandOutput>;
export declare const deserializeAws_json1_1SearchNetworkProfilesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchNetworkProfilesCommandOutput>;
export declare const deserializeAws_json1_1SearchProfilesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchProfilesCommandOutput>;
export declare const deserializeAws_json1_1SearchRoomsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchRoomsCommandOutput>;
export declare const deserializeAws_json1_1SearchSkillGroupsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchSkillGroupsCommandOutput>;
export declare const deserializeAws_json1_1SearchUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchUsersCommandOutput>;
export declare const deserializeAws_json1_1SendAnnouncementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SendAnnouncementCommandOutput>;
export declare const deserializeAws_json1_1SendInvitationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SendInvitationCommandOutput>;
export declare const deserializeAws_json1_1StartDeviceSyncCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeviceSyncCommandOutput>;
export declare const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartSmartHomeApplianceDiscoveryCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateAddressBookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAddressBookCommandOutput>;
export declare const deserializeAws_json1_1UpdateBusinessReportScheduleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBusinessReportScheduleCommandOutput>;
export declare const deserializeAws_json1_1UpdateConferenceProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateConferenceProviderCommandOutput>;
export declare const deserializeAws_json1_1UpdateContactCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateContactCommandOutput>;
export declare const deserializeAws_json1_1UpdateDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDeviceCommandOutput>;
export declare const deserializeAws_json1_1UpdateGatewayCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGatewayCommandOutput>;
export declare const deserializeAws_json1_1UpdateGatewayGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGatewayGroupCommandOutput>;
export declare const deserializeAws_json1_1UpdateNetworkProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateNetworkProfileCommandOutput>;
export declare const deserializeAws_json1_1UpdateProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateProfileCommandOutput>;
export declare const deserializeAws_json1_1UpdateRoomCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRoomCommandOutput>;
export declare const deserializeAws_json1_1UpdateSkillGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSkillGroupCommandOutput>;
