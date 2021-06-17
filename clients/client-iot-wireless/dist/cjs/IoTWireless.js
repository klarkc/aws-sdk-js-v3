"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoTWireless = void 0;
const IoTWirelessClient_1 = require("./IoTWirelessClient");
const AssociateAwsAccountWithPartnerAccountCommand_1 = require("./commands/AssociateAwsAccountWithPartnerAccountCommand");
const AssociateWirelessDeviceWithThingCommand_1 = require("./commands/AssociateWirelessDeviceWithThingCommand");
const AssociateWirelessGatewayWithCertificateCommand_1 = require("./commands/AssociateWirelessGatewayWithCertificateCommand");
const AssociateWirelessGatewayWithThingCommand_1 = require("./commands/AssociateWirelessGatewayWithThingCommand");
const CreateDestinationCommand_1 = require("./commands/CreateDestinationCommand");
const CreateDeviceProfileCommand_1 = require("./commands/CreateDeviceProfileCommand");
const CreateServiceProfileCommand_1 = require("./commands/CreateServiceProfileCommand");
const CreateWirelessDeviceCommand_1 = require("./commands/CreateWirelessDeviceCommand");
const CreateWirelessGatewayCommand_1 = require("./commands/CreateWirelessGatewayCommand");
const CreateWirelessGatewayTaskCommand_1 = require("./commands/CreateWirelessGatewayTaskCommand");
const CreateWirelessGatewayTaskDefinitionCommand_1 = require("./commands/CreateWirelessGatewayTaskDefinitionCommand");
const DeleteDestinationCommand_1 = require("./commands/DeleteDestinationCommand");
const DeleteDeviceProfileCommand_1 = require("./commands/DeleteDeviceProfileCommand");
const DeleteServiceProfileCommand_1 = require("./commands/DeleteServiceProfileCommand");
const DeleteWirelessDeviceCommand_1 = require("./commands/DeleteWirelessDeviceCommand");
const DeleteWirelessGatewayCommand_1 = require("./commands/DeleteWirelessGatewayCommand");
const DeleteWirelessGatewayTaskCommand_1 = require("./commands/DeleteWirelessGatewayTaskCommand");
const DeleteWirelessGatewayTaskDefinitionCommand_1 = require("./commands/DeleteWirelessGatewayTaskDefinitionCommand");
const DisassociateAwsAccountFromPartnerAccountCommand_1 = require("./commands/DisassociateAwsAccountFromPartnerAccountCommand");
const DisassociateWirelessDeviceFromThingCommand_1 = require("./commands/DisassociateWirelessDeviceFromThingCommand");
const DisassociateWirelessGatewayFromCertificateCommand_1 = require("./commands/DisassociateWirelessGatewayFromCertificateCommand");
const DisassociateWirelessGatewayFromThingCommand_1 = require("./commands/DisassociateWirelessGatewayFromThingCommand");
const GetDestinationCommand_1 = require("./commands/GetDestinationCommand");
const GetDeviceProfileCommand_1 = require("./commands/GetDeviceProfileCommand");
const GetLogLevelsByResourceTypesCommand_1 = require("./commands/GetLogLevelsByResourceTypesCommand");
const GetPartnerAccountCommand_1 = require("./commands/GetPartnerAccountCommand");
const GetResourceLogLevelCommand_1 = require("./commands/GetResourceLogLevelCommand");
const GetServiceEndpointCommand_1 = require("./commands/GetServiceEndpointCommand");
const GetServiceProfileCommand_1 = require("./commands/GetServiceProfileCommand");
const GetWirelessDeviceCommand_1 = require("./commands/GetWirelessDeviceCommand");
const GetWirelessDeviceStatisticsCommand_1 = require("./commands/GetWirelessDeviceStatisticsCommand");
const GetWirelessGatewayCertificateCommand_1 = require("./commands/GetWirelessGatewayCertificateCommand");
const GetWirelessGatewayCommand_1 = require("./commands/GetWirelessGatewayCommand");
const GetWirelessGatewayFirmwareInformationCommand_1 = require("./commands/GetWirelessGatewayFirmwareInformationCommand");
const GetWirelessGatewayStatisticsCommand_1 = require("./commands/GetWirelessGatewayStatisticsCommand");
const GetWirelessGatewayTaskCommand_1 = require("./commands/GetWirelessGatewayTaskCommand");
const GetWirelessGatewayTaskDefinitionCommand_1 = require("./commands/GetWirelessGatewayTaskDefinitionCommand");
const ListDestinationsCommand_1 = require("./commands/ListDestinationsCommand");
const ListDeviceProfilesCommand_1 = require("./commands/ListDeviceProfilesCommand");
const ListPartnerAccountsCommand_1 = require("./commands/ListPartnerAccountsCommand");
const ListServiceProfilesCommand_1 = require("./commands/ListServiceProfilesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWirelessDevicesCommand_1 = require("./commands/ListWirelessDevicesCommand");
const ListWirelessGatewayTaskDefinitionsCommand_1 = require("./commands/ListWirelessGatewayTaskDefinitionsCommand");
const ListWirelessGatewaysCommand_1 = require("./commands/ListWirelessGatewaysCommand");
const PutResourceLogLevelCommand_1 = require("./commands/PutResourceLogLevelCommand");
const ResetAllResourceLogLevelsCommand_1 = require("./commands/ResetAllResourceLogLevelsCommand");
const ResetResourceLogLevelCommand_1 = require("./commands/ResetResourceLogLevelCommand");
const SendDataToWirelessDeviceCommand_1 = require("./commands/SendDataToWirelessDeviceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestWirelessDeviceCommand_1 = require("./commands/TestWirelessDeviceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDestinationCommand_1 = require("./commands/UpdateDestinationCommand");
const UpdateLogLevelsByResourceTypesCommand_1 = require("./commands/UpdateLogLevelsByResourceTypesCommand");
const UpdatePartnerAccountCommand_1 = require("./commands/UpdatePartnerAccountCommand");
const UpdateWirelessDeviceCommand_1 = require("./commands/UpdateWirelessDeviceCommand");
const UpdateWirelessGatewayCommand_1 = require("./commands/UpdateWirelessGatewayCommand");
/**
 * <p>AWS IoT Wireless API documentation</p>
 */
class IoTWireless extends IoTWirelessClient_1.IoTWirelessClient {
    associateAwsAccountWithPartnerAccount(args, optionsOrCb, cb) {
        const command = new AssociateAwsAccountWithPartnerAccountCommand_1.AssociateAwsAccountWithPartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateWirelessDeviceWithThing(args, optionsOrCb, cb) {
        const command = new AssociateWirelessDeviceWithThingCommand_1.AssociateWirelessDeviceWithThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateWirelessGatewayWithCertificate(args, optionsOrCb, cb) {
        const command = new AssociateWirelessGatewayWithCertificateCommand_1.AssociateWirelessGatewayWithCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateWirelessGatewayWithThing(args, optionsOrCb, cb) {
        const command = new AssociateWirelessGatewayWithThingCommand_1.AssociateWirelessGatewayWithThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDestination(args, optionsOrCb, cb) {
        const command = new CreateDestinationCommand_1.CreateDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDeviceProfile(args, optionsOrCb, cb) {
        const command = new CreateDeviceProfileCommand_1.CreateDeviceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createServiceProfile(args, optionsOrCb, cb) {
        const command = new CreateServiceProfileCommand_1.CreateServiceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWirelessDevice(args, optionsOrCb, cb) {
        const command = new CreateWirelessDeviceCommand_1.CreateWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWirelessGateway(args, optionsOrCb, cb) {
        const command = new CreateWirelessGatewayCommand_1.CreateWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWirelessGatewayTask(args, optionsOrCb, cb) {
        const command = new CreateWirelessGatewayTaskCommand_1.CreateWirelessGatewayTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWirelessGatewayTaskDefinition(args, optionsOrCb, cb) {
        const command = new CreateWirelessGatewayTaskDefinitionCommand_1.CreateWirelessGatewayTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDestination(args, optionsOrCb, cb) {
        const command = new DeleteDestinationCommand_1.DeleteDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDeviceProfile(args, optionsOrCb, cb) {
        const command = new DeleteDeviceProfileCommand_1.DeleteDeviceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteServiceProfile(args, optionsOrCb, cb) {
        const command = new DeleteServiceProfileCommand_1.DeleteServiceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWirelessDevice(args, optionsOrCb, cb) {
        const command = new DeleteWirelessDeviceCommand_1.DeleteWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWirelessGateway(args, optionsOrCb, cb) {
        const command = new DeleteWirelessGatewayCommand_1.DeleteWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWirelessGatewayTask(args, optionsOrCb, cb) {
        const command = new DeleteWirelessGatewayTaskCommand_1.DeleteWirelessGatewayTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWirelessGatewayTaskDefinition(args, optionsOrCb, cb) {
        const command = new DeleteWirelessGatewayTaskDefinitionCommand_1.DeleteWirelessGatewayTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateAwsAccountFromPartnerAccount(args, optionsOrCb, cb) {
        const command = new DisassociateAwsAccountFromPartnerAccountCommand_1.DisassociateAwsAccountFromPartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateWirelessDeviceFromThing(args, optionsOrCb, cb) {
        const command = new DisassociateWirelessDeviceFromThingCommand_1.DisassociateWirelessDeviceFromThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateWirelessGatewayFromCertificate(args, optionsOrCb, cb) {
        const command = new DisassociateWirelessGatewayFromCertificateCommand_1.DisassociateWirelessGatewayFromCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateWirelessGatewayFromThing(args, optionsOrCb, cb) {
        const command = new DisassociateWirelessGatewayFromThingCommand_1.DisassociateWirelessGatewayFromThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDestination(args, optionsOrCb, cb) {
        const command = new GetDestinationCommand_1.GetDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDeviceProfile(args, optionsOrCb, cb) {
        const command = new GetDeviceProfileCommand_1.GetDeviceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLogLevelsByResourceTypes(args, optionsOrCb, cb) {
        const command = new GetLogLevelsByResourceTypesCommand_1.GetLogLevelsByResourceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPartnerAccount(args, optionsOrCb, cb) {
        const command = new GetPartnerAccountCommand_1.GetPartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResourceLogLevel(args, optionsOrCb, cb) {
        const command = new GetResourceLogLevelCommand_1.GetResourceLogLevelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getServiceEndpoint(args, optionsOrCb, cb) {
        const command = new GetServiceEndpointCommand_1.GetServiceEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getServiceProfile(args, optionsOrCb, cb) {
        const command = new GetServiceProfileCommand_1.GetServiceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessDevice(args, optionsOrCb, cb) {
        const command = new GetWirelessDeviceCommand_1.GetWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessDeviceStatistics(args, optionsOrCb, cb) {
        const command = new GetWirelessDeviceStatisticsCommand_1.GetWirelessDeviceStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessGateway(args, optionsOrCb, cb) {
        const command = new GetWirelessGatewayCommand_1.GetWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessGatewayCertificate(args, optionsOrCb, cb) {
        const command = new GetWirelessGatewayCertificateCommand_1.GetWirelessGatewayCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessGatewayFirmwareInformation(args, optionsOrCb, cb) {
        const command = new GetWirelessGatewayFirmwareInformationCommand_1.GetWirelessGatewayFirmwareInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessGatewayStatistics(args, optionsOrCb, cb) {
        const command = new GetWirelessGatewayStatisticsCommand_1.GetWirelessGatewayStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessGatewayTask(args, optionsOrCb, cb) {
        const command = new GetWirelessGatewayTaskCommand_1.GetWirelessGatewayTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getWirelessGatewayTaskDefinition(args, optionsOrCb, cb) {
        const command = new GetWirelessGatewayTaskDefinitionCommand_1.GetWirelessGatewayTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDestinations(args, optionsOrCb, cb) {
        const command = new ListDestinationsCommand_1.ListDestinationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDeviceProfiles(args, optionsOrCb, cb) {
        const command = new ListDeviceProfilesCommand_1.ListDeviceProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPartnerAccounts(args, optionsOrCb, cb) {
        const command = new ListPartnerAccountsCommand_1.ListPartnerAccountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listServiceProfiles(args, optionsOrCb, cb) {
        const command = new ListServiceProfilesCommand_1.ListServiceProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listWirelessDevices(args, optionsOrCb, cb) {
        const command = new ListWirelessDevicesCommand_1.ListWirelessDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listWirelessGateways(args, optionsOrCb, cb) {
        const command = new ListWirelessGatewaysCommand_1.ListWirelessGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listWirelessGatewayTaskDefinitions(args, optionsOrCb, cb) {
        const command = new ListWirelessGatewayTaskDefinitionsCommand_1.ListWirelessGatewayTaskDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResourceLogLevel(args, optionsOrCb, cb) {
        const command = new PutResourceLogLevelCommand_1.PutResourceLogLevelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetAllResourceLogLevels(args, optionsOrCb, cb) {
        const command = new ResetAllResourceLogLevelsCommand_1.ResetAllResourceLogLevelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetResourceLogLevel(args, optionsOrCb, cb) {
        const command = new ResetResourceLogLevelCommand_1.ResetResourceLogLevelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendDataToWirelessDevice(args, optionsOrCb, cb) {
        const command = new SendDataToWirelessDeviceCommand_1.SendDataToWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    testWirelessDevice(args, optionsOrCb, cb) {
        const command = new TestWirelessDeviceCommand_1.TestWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDestination(args, optionsOrCb, cb) {
        const command = new UpdateDestinationCommand_1.UpdateDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateLogLevelsByResourceTypes(args, optionsOrCb, cb) {
        const command = new UpdateLogLevelsByResourceTypesCommand_1.UpdateLogLevelsByResourceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePartnerAccount(args, optionsOrCb, cb) {
        const command = new UpdatePartnerAccountCommand_1.UpdatePartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWirelessDevice(args, optionsOrCb, cb) {
        const command = new UpdateWirelessDeviceCommand_1.UpdateWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWirelessGateway(args, optionsOrCb, cb) {
        const command = new UpdateWirelessGatewayCommand_1.UpdateWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.IoTWireless = IoTWireless;
//# sourceMappingURL=IoTWireless.js.map