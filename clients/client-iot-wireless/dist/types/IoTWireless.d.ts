import { IoTWirelessClient } from "./IoTWirelessClient";
import { AssociateAwsAccountWithPartnerAccountCommandInput, AssociateAwsAccountWithPartnerAccountCommandOutput } from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import { AssociateWirelessDeviceWithThingCommandInput, AssociateWirelessDeviceWithThingCommandOutput } from "./commands/AssociateWirelessDeviceWithThingCommand";
import { AssociateWirelessGatewayWithCertificateCommandInput, AssociateWirelessGatewayWithCertificateCommandOutput } from "./commands/AssociateWirelessGatewayWithCertificateCommand";
import { AssociateWirelessGatewayWithThingCommandInput, AssociateWirelessGatewayWithThingCommandOutput } from "./commands/AssociateWirelessGatewayWithThingCommand";
import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "./commands/CreateDestinationCommand";
import { CreateDeviceProfileCommandInput, CreateDeviceProfileCommandOutput } from "./commands/CreateDeviceProfileCommand";
import { CreateServiceProfileCommandInput, CreateServiceProfileCommandOutput } from "./commands/CreateServiceProfileCommand";
import { CreateWirelessDeviceCommandInput, CreateWirelessDeviceCommandOutput } from "./commands/CreateWirelessDeviceCommand";
import { CreateWirelessGatewayCommandInput, CreateWirelessGatewayCommandOutput } from "./commands/CreateWirelessGatewayCommand";
import { CreateWirelessGatewayTaskCommandInput, CreateWirelessGatewayTaskCommandOutput } from "./commands/CreateWirelessGatewayTaskCommand";
import { CreateWirelessGatewayTaskDefinitionCommandInput, CreateWirelessGatewayTaskDefinitionCommandOutput } from "./commands/CreateWirelessGatewayTaskDefinitionCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "./commands/DeleteDestinationCommand";
import { DeleteDeviceProfileCommandInput, DeleteDeviceProfileCommandOutput } from "./commands/DeleteDeviceProfileCommand";
import { DeleteServiceProfileCommandInput, DeleteServiceProfileCommandOutput } from "./commands/DeleteServiceProfileCommand";
import { DeleteWirelessDeviceCommandInput, DeleteWirelessDeviceCommandOutput } from "./commands/DeleteWirelessDeviceCommand";
import { DeleteWirelessGatewayCommandInput, DeleteWirelessGatewayCommandOutput } from "./commands/DeleteWirelessGatewayCommand";
import { DeleteWirelessGatewayTaskCommandInput, DeleteWirelessGatewayTaskCommandOutput } from "./commands/DeleteWirelessGatewayTaskCommand";
import { DeleteWirelessGatewayTaskDefinitionCommandInput, DeleteWirelessGatewayTaskDefinitionCommandOutput } from "./commands/DeleteWirelessGatewayTaskDefinitionCommand";
import { DisassociateAwsAccountFromPartnerAccountCommandInput, DisassociateAwsAccountFromPartnerAccountCommandOutput } from "./commands/DisassociateAwsAccountFromPartnerAccountCommand";
import { DisassociateWirelessDeviceFromThingCommandInput, DisassociateWirelessDeviceFromThingCommandOutput } from "./commands/DisassociateWirelessDeviceFromThingCommand";
import { DisassociateWirelessGatewayFromCertificateCommandInput, DisassociateWirelessGatewayFromCertificateCommandOutput } from "./commands/DisassociateWirelessGatewayFromCertificateCommand";
import { DisassociateWirelessGatewayFromThingCommandInput, DisassociateWirelessGatewayFromThingCommandOutput } from "./commands/DisassociateWirelessGatewayFromThingCommand";
import { GetDestinationCommandInput, GetDestinationCommandOutput } from "./commands/GetDestinationCommand";
import { GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput } from "./commands/GetDeviceProfileCommand";
import { GetLogLevelsByResourceTypesCommandInput, GetLogLevelsByResourceTypesCommandOutput } from "./commands/GetLogLevelsByResourceTypesCommand";
import { GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput } from "./commands/GetPartnerAccountCommand";
import { GetResourceLogLevelCommandInput, GetResourceLogLevelCommandOutput } from "./commands/GetResourceLogLevelCommand";
import { GetServiceEndpointCommandInput, GetServiceEndpointCommandOutput } from "./commands/GetServiceEndpointCommand";
import { GetServiceProfileCommandInput, GetServiceProfileCommandOutput } from "./commands/GetServiceProfileCommand";
import { GetWirelessDeviceCommandInput, GetWirelessDeviceCommandOutput } from "./commands/GetWirelessDeviceCommand";
import { GetWirelessDeviceStatisticsCommandInput, GetWirelessDeviceStatisticsCommandOutput } from "./commands/GetWirelessDeviceStatisticsCommand";
import { GetWirelessGatewayCertificateCommandInput, GetWirelessGatewayCertificateCommandOutput } from "./commands/GetWirelessGatewayCertificateCommand";
import { GetWirelessGatewayCommandInput, GetWirelessGatewayCommandOutput } from "./commands/GetWirelessGatewayCommand";
import { GetWirelessGatewayFirmwareInformationCommandInput, GetWirelessGatewayFirmwareInformationCommandOutput } from "./commands/GetWirelessGatewayFirmwareInformationCommand";
import { GetWirelessGatewayStatisticsCommandInput, GetWirelessGatewayStatisticsCommandOutput } from "./commands/GetWirelessGatewayStatisticsCommand";
import { GetWirelessGatewayTaskCommandInput, GetWirelessGatewayTaskCommandOutput } from "./commands/GetWirelessGatewayTaskCommand";
import { GetWirelessGatewayTaskDefinitionCommandInput, GetWirelessGatewayTaskDefinitionCommandOutput } from "./commands/GetWirelessGatewayTaskDefinitionCommand";
import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "./commands/ListDestinationsCommand";
import { ListDeviceProfilesCommandInput, ListDeviceProfilesCommandOutput } from "./commands/ListDeviceProfilesCommand";
import { ListPartnerAccountsCommandInput, ListPartnerAccountsCommandOutput } from "./commands/ListPartnerAccountsCommand";
import { ListServiceProfilesCommandInput, ListServiceProfilesCommandOutput } from "./commands/ListServiceProfilesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWirelessDevicesCommandInput, ListWirelessDevicesCommandOutput } from "./commands/ListWirelessDevicesCommand";
import { ListWirelessGatewayTaskDefinitionsCommandInput, ListWirelessGatewayTaskDefinitionsCommandOutput } from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import { ListWirelessGatewaysCommandInput, ListWirelessGatewaysCommandOutput } from "./commands/ListWirelessGatewaysCommand";
import { PutResourceLogLevelCommandInput, PutResourceLogLevelCommandOutput } from "./commands/PutResourceLogLevelCommand";
import { ResetAllResourceLogLevelsCommandInput, ResetAllResourceLogLevelsCommandOutput } from "./commands/ResetAllResourceLogLevelsCommand";
import { ResetResourceLogLevelCommandInput, ResetResourceLogLevelCommandOutput } from "./commands/ResetResourceLogLevelCommand";
import { SendDataToWirelessDeviceCommandInput, SendDataToWirelessDeviceCommandOutput } from "./commands/SendDataToWirelessDeviceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput } from "./commands/TestWirelessDeviceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "./commands/UpdateDestinationCommand";
import { UpdateLogLevelsByResourceTypesCommandInput, UpdateLogLevelsByResourceTypesCommandOutput } from "./commands/UpdateLogLevelsByResourceTypesCommand";
import { UpdatePartnerAccountCommandInput, UpdatePartnerAccountCommandOutput } from "./commands/UpdatePartnerAccountCommand";
import { UpdateWirelessDeviceCommandInput, UpdateWirelessDeviceCommandOutput } from "./commands/UpdateWirelessDeviceCommand";
import { UpdateWirelessGatewayCommandInput, UpdateWirelessGatewayCommandOutput } from "./commands/UpdateWirelessGatewayCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Wireless API documentation</p>
 */
export declare class IoTWireless extends IoTWirelessClient {
    /**
     * <p>Associates a partner account with your AWS account.</p>
     */
    associateAwsAccountWithPartnerAccount(args: AssociateAwsAccountWithPartnerAccountCommandInput, options?: __HttpHandlerOptions): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput>;
    associateAwsAccountWithPartnerAccount(args: AssociateAwsAccountWithPartnerAccountCommandInput, cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void): void;
    associateAwsAccountWithPartnerAccount(args: AssociateAwsAccountWithPartnerAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void): void;
    /**
     * <p>Associates a wireless device with a thing.</p>
     */
    associateWirelessDeviceWithThing(args: AssociateWirelessDeviceWithThingCommandInput, options?: __HttpHandlerOptions): Promise<AssociateWirelessDeviceWithThingCommandOutput>;
    associateWirelessDeviceWithThing(args: AssociateWirelessDeviceWithThingCommandInput, cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void): void;
    associateWirelessDeviceWithThing(args: AssociateWirelessDeviceWithThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void): void;
    /**
     * <p>Associates a wireless gateway with a certificate.</p>
     */
    associateWirelessGatewayWithCertificate(args: AssociateWirelessGatewayWithCertificateCommandInput, options?: __HttpHandlerOptions): Promise<AssociateWirelessGatewayWithCertificateCommandOutput>;
    associateWirelessGatewayWithCertificate(args: AssociateWirelessGatewayWithCertificateCommandInput, cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void): void;
    associateWirelessGatewayWithCertificate(args: AssociateWirelessGatewayWithCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void): void;
    /**
     * <p>Associates a wireless gateway with a thing.</p>
     */
    associateWirelessGatewayWithThing(args: AssociateWirelessGatewayWithThingCommandInput, options?: __HttpHandlerOptions): Promise<AssociateWirelessGatewayWithThingCommandOutput>;
    associateWirelessGatewayWithThing(args: AssociateWirelessGatewayWithThingCommandInput, cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void): void;
    associateWirelessGatewayWithThing(args: AssociateWirelessGatewayWithThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void): void;
    /**
     * <p>Creates a new destination that maps a device message to an AWS IoT rule.</p>
     */
    createDestination(args: CreateDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreateDestinationCommandOutput>;
    createDestination(args: CreateDestinationCommandInput, cb: (err: any, data?: CreateDestinationCommandOutput) => void): void;
    createDestination(args: CreateDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDestinationCommandOutput) => void): void;
    /**
     * <p>Creates a new device profile.</p>
     */
    createDeviceProfile(args: CreateDeviceProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeviceProfileCommandOutput>;
    createDeviceProfile(args: CreateDeviceProfileCommandInput, cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void): void;
    createDeviceProfile(args: CreateDeviceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void): void;
    /**
     * <p>Creates a new service profile.</p>
     */
    createServiceProfile(args: CreateServiceProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceProfileCommandOutput>;
    createServiceProfile(args: CreateServiceProfileCommandInput, cb: (err: any, data?: CreateServiceProfileCommandOutput) => void): void;
    createServiceProfile(args: CreateServiceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServiceProfileCommandOutput) => void): void;
    /**
     * <p>Provisions a wireless device.</p>
     */
    createWirelessDevice(args: CreateWirelessDeviceCommandInput, options?: __HttpHandlerOptions): Promise<CreateWirelessDeviceCommandOutput>;
    createWirelessDevice(args: CreateWirelessDeviceCommandInput, cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void): void;
    createWirelessDevice(args: CreateWirelessDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void): void;
    /**
     * <p>Provisions a wireless gateway.</p>
     */
    createWirelessGateway(args: CreateWirelessGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateWirelessGatewayCommandOutput>;
    createWirelessGateway(args: CreateWirelessGatewayCommandInput, cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void): void;
    createWirelessGateway(args: CreateWirelessGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void): void;
    /**
     * <p>Creates a task for a wireless gateway.</p>
     */
    createWirelessGatewayTask(args: CreateWirelessGatewayTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateWirelessGatewayTaskCommandOutput>;
    createWirelessGatewayTask(args: CreateWirelessGatewayTaskCommandInput, cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void): void;
    createWirelessGatewayTask(args: CreateWirelessGatewayTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void): void;
    /**
     * <p>Creates a gateway task definition.</p>
     */
    createWirelessGatewayTaskDefinition(args: CreateWirelessGatewayTaskDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput>;
    createWirelessGatewayTaskDefinition(args: CreateWirelessGatewayTaskDefinitionCommandInput, cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void): void;
    createWirelessGatewayTaskDefinition(args: CreateWirelessGatewayTaskDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a destination.</p>
     */
    deleteDestination(args: DeleteDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDestinationCommandOutput>;
    deleteDestination(args: DeleteDestinationCommandInput, cb: (err: any, data?: DeleteDestinationCommandOutput) => void): void;
    deleteDestination(args: DeleteDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDestinationCommandOutput) => void): void;
    /**
     * <p>Deletes a device profile.</p>
     */
    deleteDeviceProfile(args: DeleteDeviceProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceProfileCommandOutput>;
    deleteDeviceProfile(args: DeleteDeviceProfileCommandInput, cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void): void;
    deleteDeviceProfile(args: DeleteDeviceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a service profile.</p>
     */
    deleteServiceProfile(args: DeleteServiceProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceProfileCommandOutput>;
    deleteServiceProfile(args: DeleteServiceProfileCommandInput, cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void): void;
    deleteServiceProfile(args: DeleteServiceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a wireless device.</p>
     */
    deleteWirelessDevice(args: DeleteWirelessDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWirelessDeviceCommandOutput>;
    deleteWirelessDevice(args: DeleteWirelessDeviceCommandInput, cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void): void;
    deleteWirelessDevice(args: DeleteWirelessDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void): void;
    /**
     * <p>Deletes a wireless gateway.</p>
     */
    deleteWirelessGateway(args: DeleteWirelessGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWirelessGatewayCommandOutput>;
    deleteWirelessGateway(args: DeleteWirelessGatewayCommandInput, cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void): void;
    deleteWirelessGateway(args: DeleteWirelessGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void): void;
    /**
     * <p>Deletes a wireless gateway task.</p>
     */
    deleteWirelessGatewayTask(args: DeleteWirelessGatewayTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWirelessGatewayTaskCommandOutput>;
    deleteWirelessGatewayTask(args: DeleteWirelessGatewayTaskCommandInput, cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void): void;
    deleteWirelessGatewayTask(args: DeleteWirelessGatewayTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void): void;
    /**
     * <p>Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.</p>
     */
    deleteWirelessGatewayTaskDefinition(args: DeleteWirelessGatewayTaskDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput>;
    deleteWirelessGatewayTaskDefinition(args: DeleteWirelessGatewayTaskDefinitionCommandInput, cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void): void;
    deleteWirelessGatewayTaskDefinition(args: DeleteWirelessGatewayTaskDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void): void;
    /**
     * <p>Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.</p>
     */
    disassociateAwsAccountFromPartnerAccount(args: DisassociateAwsAccountFromPartnerAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput>;
    disassociateAwsAccountFromPartnerAccount(args: DisassociateAwsAccountFromPartnerAccountCommandInput, cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void): void;
    disassociateAwsAccountFromPartnerAccount(args: DisassociateAwsAccountFromPartnerAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void): void;
    /**
     * <p>Disassociates a wireless device from its currently associated thing.</p>
     */
    disassociateWirelessDeviceFromThing(args: DisassociateWirelessDeviceFromThingCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateWirelessDeviceFromThingCommandOutput>;
    disassociateWirelessDeviceFromThing(args: DisassociateWirelessDeviceFromThingCommandInput, cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void): void;
    disassociateWirelessDeviceFromThing(args: DisassociateWirelessDeviceFromThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void): void;
    /**
     * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
     */
    disassociateWirelessGatewayFromCertificate(args: DisassociateWirelessGatewayFromCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput>;
    disassociateWirelessGatewayFromCertificate(args: DisassociateWirelessGatewayFromCertificateCommandInput, cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void): void;
    disassociateWirelessGatewayFromCertificate(args: DisassociateWirelessGatewayFromCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void): void;
    /**
     * <p>Disassociates a wireless gateway from its currently associated thing.</p>
     */
    disassociateWirelessGatewayFromThing(args: DisassociateWirelessGatewayFromThingCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateWirelessGatewayFromThingCommandOutput>;
    disassociateWirelessGatewayFromThing(args: DisassociateWirelessGatewayFromThingCommandInput, cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void): void;
    disassociateWirelessGatewayFromThing(args: DisassociateWirelessGatewayFromThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void): void;
    /**
     * <p>Gets information about a destination.</p>
     */
    getDestination(args: GetDestinationCommandInput, options?: __HttpHandlerOptions): Promise<GetDestinationCommandOutput>;
    getDestination(args: GetDestinationCommandInput, cb: (err: any, data?: GetDestinationCommandOutput) => void): void;
    getDestination(args: GetDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDestinationCommandOutput) => void): void;
    /**
     * <p>Gets information about a device profile.</p>
     */
    getDeviceProfile(args: GetDeviceProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceProfileCommandOutput>;
    getDeviceProfile(args: GetDeviceProfileCommandInput, cb: (err: any, data?: GetDeviceProfileCommandOutput) => void): void;
    getDeviceProfile(args: GetDeviceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceProfileCommandOutput) => void): void;
    /**
     * <p>Returns current default log-levels, or log levels by resource types, could be for wireless device log options or wireless gateway log options.</p>
     */
    getLogLevelsByResourceTypes(args: GetLogLevelsByResourceTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetLogLevelsByResourceTypesCommandOutput>;
    getLogLevelsByResourceTypes(args: GetLogLevelsByResourceTypesCommandInput, cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void): void;
    getLogLevelsByResourceTypes(args: GetLogLevelsByResourceTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void): void;
    /**
     * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
     */
    getPartnerAccount(args: GetPartnerAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetPartnerAccountCommandOutput>;
    getPartnerAccount(args: GetPartnerAccountCommandInput, cb: (err: any, data?: GetPartnerAccountCommandOutput) => void): void;
    getPartnerAccount(args: GetPartnerAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartnerAccountCommandOutput) => void): void;
    /**
     * <p>Fetches the log-level override if any for a given resource-ID and resource-type, coulde be a wireless device or a wireless gateway.</p>
     */
    getResourceLogLevel(args: GetResourceLogLevelCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceLogLevelCommandOutput>;
    getResourceLogLevel(args: GetResourceLogLevelCommandInput, cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void): void;
    getResourceLogLevel(args: GetResourceLogLevelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void): void;
    /**
     * <p>Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.</p>
     */
    getServiceEndpoint(args: GetServiceEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceEndpointCommandOutput>;
    getServiceEndpoint(args: GetServiceEndpointCommandInput, cb: (err: any, data?: GetServiceEndpointCommandOutput) => void): void;
    getServiceEndpoint(args: GetServiceEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceEndpointCommandOutput) => void): void;
    /**
     * <p>Gets information about a service profile.</p>
     */
    getServiceProfile(args: GetServiceProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceProfileCommandOutput>;
    getServiceProfile(args: GetServiceProfileCommandInput, cb: (err: any, data?: GetServiceProfileCommandOutput) => void): void;
    getServiceProfile(args: GetServiceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceProfileCommandOutput) => void): void;
    /**
     * <p>Gets information about a wireless device.</p>
     */
    getWirelessDevice(args: GetWirelessDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessDeviceCommandOutput>;
    getWirelessDevice(args: GetWirelessDeviceCommandInput, cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void): void;
    getWirelessDevice(args: GetWirelessDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void): void;
    /**
     * <p>Gets operating information about a wireless device.</p>
     */
    getWirelessDeviceStatistics(args: GetWirelessDeviceStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessDeviceStatisticsCommandOutput>;
    getWirelessDeviceStatistics(args: GetWirelessDeviceStatisticsCommandInput, cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void): void;
    getWirelessDeviceStatistics(args: GetWirelessDeviceStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void): void;
    /**
     * <p>Gets information about a wireless gateway.</p>
     */
    getWirelessGateway(args: GetWirelessGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessGatewayCommandOutput>;
    getWirelessGateway(args: GetWirelessGatewayCommandInput, cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void): void;
    getWirelessGateway(args: GetWirelessGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void): void;
    /**
     * <p>Gets the ID of the certificate that is currently associated with a wireless gateway.</p>
     */
    getWirelessGatewayCertificate(args: GetWirelessGatewayCertificateCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessGatewayCertificateCommandOutput>;
    getWirelessGatewayCertificate(args: GetWirelessGatewayCertificateCommandInput, cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void): void;
    getWirelessGatewayCertificate(args: GetWirelessGatewayCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void): void;
    /**
     * <p>Gets the firmware version and other information about a wireless gateway.</p>
     */
    getWirelessGatewayFirmwareInformation(args: GetWirelessGatewayFirmwareInformationCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessGatewayFirmwareInformationCommandOutput>;
    getWirelessGatewayFirmwareInformation(args: GetWirelessGatewayFirmwareInformationCommandInput, cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void): void;
    getWirelessGatewayFirmwareInformation(args: GetWirelessGatewayFirmwareInformationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void): void;
    /**
     * <p>Gets operating information about a wireless gateway.</p>
     */
    getWirelessGatewayStatistics(args: GetWirelessGatewayStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessGatewayStatisticsCommandOutput>;
    getWirelessGatewayStatistics(args: GetWirelessGatewayStatisticsCommandInput, cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void): void;
    getWirelessGatewayStatistics(args: GetWirelessGatewayStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void): void;
    /**
     * <p>Gets information about a wireless gateway task.</p>
     */
    getWirelessGatewayTask(args: GetWirelessGatewayTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessGatewayTaskCommandOutput>;
    getWirelessGatewayTask(args: GetWirelessGatewayTaskCommandInput, cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void): void;
    getWirelessGatewayTask(args: GetWirelessGatewayTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void): void;
    /**
     * <p>Gets information about a wireless gateway task definition.</p>
     */
    getWirelessGatewayTaskDefinition(args: GetWirelessGatewayTaskDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetWirelessGatewayTaskDefinitionCommandOutput>;
    getWirelessGatewayTaskDefinition(args: GetWirelessGatewayTaskDefinitionCommandInput, cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void): void;
    getWirelessGatewayTaskDefinition(args: GetWirelessGatewayTaskDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void): void;
    /**
     * <p>Lists the destinations registered to your AWS account.</p>
     */
    listDestinations(args: ListDestinationsCommandInput, options?: __HttpHandlerOptions): Promise<ListDestinationsCommandOutput>;
    listDestinations(args: ListDestinationsCommandInput, cb: (err: any, data?: ListDestinationsCommandOutput) => void): void;
    listDestinations(args: ListDestinationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDestinationsCommandOutput) => void): void;
    /**
     * <p>Lists the device profiles registered to your AWS account.</p>
     */
    listDeviceProfiles(args: ListDeviceProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceProfilesCommandOutput>;
    listDeviceProfiles(args: ListDeviceProfilesCommandInput, cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void): void;
    listDeviceProfiles(args: ListDeviceProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void): void;
    /**
     * <p>Lists the partner accounts associated with your AWS account.</p>
     */
    listPartnerAccounts(args: ListPartnerAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListPartnerAccountsCommandOutput>;
    listPartnerAccounts(args: ListPartnerAccountsCommandInput, cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void): void;
    listPartnerAccounts(args: ListPartnerAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void): void;
    /**
     * <p>Lists the service profiles registered to your AWS account.</p>
     */
    listServiceProfiles(args: ListServiceProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceProfilesCommandOutput>;
    listServiceProfiles(args: ListServiceProfilesCommandInput, cb: (err: any, data?: ListServiceProfilesCommandOutput) => void): void;
    listServiceProfiles(args: ListServiceProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceProfilesCommandOutput) => void): void;
    /**
     * <p>Lists the tags (metadata) you have assigned to the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the wireless devices registered to your AWS account.</p>
     */
    listWirelessDevices(args: ListWirelessDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListWirelessDevicesCommandOutput>;
    listWirelessDevices(args: ListWirelessDevicesCommandInput, cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void): void;
    listWirelessDevices(args: ListWirelessDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void): void;
    /**
     * <p>Lists the wireless gateways registered to your AWS account.</p>
     */
    listWirelessGateways(args: ListWirelessGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListWirelessGatewaysCommandOutput>;
    listWirelessGateways(args: ListWirelessGatewaysCommandInput, cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void): void;
    listWirelessGateways(args: ListWirelessGatewaysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void): void;
    /**
     * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
     */
    listWirelessGatewayTaskDefinitions(args: ListWirelessGatewayTaskDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput>;
    listWirelessGatewayTaskDefinitions(args: ListWirelessGatewayTaskDefinitionsCommandInput, cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void): void;
    listWirelessGatewayTaskDefinitions(args: ListWirelessGatewayTaskDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void): void;
    /**
     * <p>Sets the log-level override for a resource-ID and resource-type, could be a wireless gateway or a wireless device.</p>
     */
    putResourceLogLevel(args: PutResourceLogLevelCommandInput, options?: __HttpHandlerOptions): Promise<PutResourceLogLevelCommandOutput>;
    putResourceLogLevel(args: PutResourceLogLevelCommandInput, cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void): void;
    putResourceLogLevel(args: PutResourceLogLevelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void): void;
    /**
     * <p>Remove log-level overrides if any for all resources (both wireless devices and wireless gateways).</p>
     */
    resetAllResourceLogLevels(args: ResetAllResourceLogLevelsCommandInput, options?: __HttpHandlerOptions): Promise<ResetAllResourceLogLevelsCommandOutput>;
    resetAllResourceLogLevels(args: ResetAllResourceLogLevelsCommandInput, cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void): void;
    resetAllResourceLogLevels(args: ResetAllResourceLogLevelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void): void;
    /**
     * <p>Remove log-level override if any for a specific resource-ID and resource-type, could be a wireless device or a wireless gateway.</p>
     */
    resetResourceLogLevel(args: ResetResourceLogLevelCommandInput, options?: __HttpHandlerOptions): Promise<ResetResourceLogLevelCommandOutput>;
    resetResourceLogLevel(args: ResetResourceLogLevelCommandInput, cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void): void;
    resetResourceLogLevel(args: ResetResourceLogLevelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void): void;
    /**
     * <p>Sends a decrypted application data frame to a device.</p>
     */
    sendDataToWirelessDevice(args: SendDataToWirelessDeviceCommandInput, options?: __HttpHandlerOptions): Promise<SendDataToWirelessDeviceCommandOutput>;
    sendDataToWirelessDevice(args: SendDataToWirelessDeviceCommandInput, cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void): void;
    sendDataToWirelessDevice(args: SendDataToWirelessDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void): void;
    /**
     * <p>Adds a tag to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.</p>
     */
    testWirelessDevice(args: TestWirelessDeviceCommandInput, options?: __HttpHandlerOptions): Promise<TestWirelessDeviceCommandOutput>;
    testWirelessDevice(args: TestWirelessDeviceCommandInput, cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void): void;
    testWirelessDevice(args: TestWirelessDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates properties of a destination.</p>
     */
    updateDestination(args: UpdateDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDestinationCommandOutput>;
    updateDestination(args: UpdateDestinationCommandInput, cb: (err: any, data?: UpdateDestinationCommandOutput) => void): void;
    updateDestination(args: UpdateDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDestinationCommandOutput) => void): void;
    /**
     * <p>Set default log level, or log levels by resource types, could be for wireless device log options or wireless gateways log options. This is to control the log messages that will be displayed in CloudWatch.</p>
     */
    updateLogLevelsByResourceTypes(args: UpdateLogLevelsByResourceTypesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLogLevelsByResourceTypesCommandOutput>;
    updateLogLevelsByResourceTypes(args: UpdateLogLevelsByResourceTypesCommandInput, cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void): void;
    updateLogLevelsByResourceTypes(args: UpdateLogLevelsByResourceTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void): void;
    /**
     * <p>Updates properties of a partner account.</p>
     */
    updatePartnerAccount(args: UpdatePartnerAccountCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePartnerAccountCommandOutput>;
    updatePartnerAccount(args: UpdatePartnerAccountCommandInput, cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void): void;
    updatePartnerAccount(args: UpdatePartnerAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void): void;
    /**
     * <p>Updates properties of a wireless device.</p>
     */
    updateWirelessDevice(args: UpdateWirelessDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWirelessDeviceCommandOutput>;
    updateWirelessDevice(args: UpdateWirelessDeviceCommandInput, cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void): void;
    updateWirelessDevice(args: UpdateWirelessDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void): void;
    /**
     * <p>Updates properties of a wireless gateway.</p>
     */
    updateWirelessGateway(args: UpdateWirelessGatewayCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWirelessGatewayCommandOutput>;
    updateWirelessGateway(args: UpdateWirelessGatewayCommandInput, cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void): void;
    updateWirelessGateway(args: UpdateWirelessGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void): void;
}
