import { __extends } from "tslib";
import { IoTWirelessClient } from "./IoTWirelessClient";
import { AssociateAwsAccountWithPartnerAccountCommand, } from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import { AssociateWirelessDeviceWithThingCommand, } from "./commands/AssociateWirelessDeviceWithThingCommand";
import { AssociateWirelessGatewayWithCertificateCommand, } from "./commands/AssociateWirelessGatewayWithCertificateCommand";
import { AssociateWirelessGatewayWithThingCommand, } from "./commands/AssociateWirelessGatewayWithThingCommand";
import { CreateDestinationCommand, } from "./commands/CreateDestinationCommand";
import { CreateDeviceProfileCommand, } from "./commands/CreateDeviceProfileCommand";
import { CreateServiceProfileCommand, } from "./commands/CreateServiceProfileCommand";
import { CreateWirelessDeviceCommand, } from "./commands/CreateWirelessDeviceCommand";
import { CreateWirelessGatewayCommand, } from "./commands/CreateWirelessGatewayCommand";
import { CreateWirelessGatewayTaskCommand, } from "./commands/CreateWirelessGatewayTaskCommand";
import { CreateWirelessGatewayTaskDefinitionCommand, } from "./commands/CreateWirelessGatewayTaskDefinitionCommand";
import { DeleteDestinationCommand, } from "./commands/DeleteDestinationCommand";
import { DeleteDeviceProfileCommand, } from "./commands/DeleteDeviceProfileCommand";
import { DeleteServiceProfileCommand, } from "./commands/DeleteServiceProfileCommand";
import { DeleteWirelessDeviceCommand, } from "./commands/DeleteWirelessDeviceCommand";
import { DeleteWirelessGatewayCommand, } from "./commands/DeleteWirelessGatewayCommand";
import { DeleteWirelessGatewayTaskCommand, } from "./commands/DeleteWirelessGatewayTaskCommand";
import { DeleteWirelessGatewayTaskDefinitionCommand, } from "./commands/DeleteWirelessGatewayTaskDefinitionCommand";
import { DisassociateAwsAccountFromPartnerAccountCommand, } from "./commands/DisassociateAwsAccountFromPartnerAccountCommand";
import { DisassociateWirelessDeviceFromThingCommand, } from "./commands/DisassociateWirelessDeviceFromThingCommand";
import { DisassociateWirelessGatewayFromCertificateCommand, } from "./commands/DisassociateWirelessGatewayFromCertificateCommand";
import { DisassociateWirelessGatewayFromThingCommand, } from "./commands/DisassociateWirelessGatewayFromThingCommand";
import { GetDestinationCommand, } from "./commands/GetDestinationCommand";
import { GetDeviceProfileCommand, } from "./commands/GetDeviceProfileCommand";
import { GetLogLevelsByResourceTypesCommand, } from "./commands/GetLogLevelsByResourceTypesCommand";
import { GetPartnerAccountCommand, } from "./commands/GetPartnerAccountCommand";
import { GetResourceLogLevelCommand, } from "./commands/GetResourceLogLevelCommand";
import { GetServiceEndpointCommand, } from "./commands/GetServiceEndpointCommand";
import { GetServiceProfileCommand, } from "./commands/GetServiceProfileCommand";
import { GetWirelessDeviceCommand, } from "./commands/GetWirelessDeviceCommand";
import { GetWirelessDeviceStatisticsCommand, } from "./commands/GetWirelessDeviceStatisticsCommand";
import { GetWirelessGatewayCertificateCommand, } from "./commands/GetWirelessGatewayCertificateCommand";
import { GetWirelessGatewayCommand, } from "./commands/GetWirelessGatewayCommand";
import { GetWirelessGatewayFirmwareInformationCommand, } from "./commands/GetWirelessGatewayFirmwareInformationCommand";
import { GetWirelessGatewayStatisticsCommand, } from "./commands/GetWirelessGatewayStatisticsCommand";
import { GetWirelessGatewayTaskCommand, } from "./commands/GetWirelessGatewayTaskCommand";
import { GetWirelessGatewayTaskDefinitionCommand, } from "./commands/GetWirelessGatewayTaskDefinitionCommand";
import { ListDestinationsCommand, } from "./commands/ListDestinationsCommand";
import { ListDeviceProfilesCommand, } from "./commands/ListDeviceProfilesCommand";
import { ListPartnerAccountsCommand, } from "./commands/ListPartnerAccountsCommand";
import { ListServiceProfilesCommand, } from "./commands/ListServiceProfilesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListWirelessDevicesCommand, } from "./commands/ListWirelessDevicesCommand";
import { ListWirelessGatewayTaskDefinitionsCommand, } from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import { ListWirelessGatewaysCommand, } from "./commands/ListWirelessGatewaysCommand";
import { PutResourceLogLevelCommand, } from "./commands/PutResourceLogLevelCommand";
import { ResetAllResourceLogLevelsCommand, } from "./commands/ResetAllResourceLogLevelsCommand";
import { ResetResourceLogLevelCommand, } from "./commands/ResetResourceLogLevelCommand";
import { SendDataToWirelessDeviceCommand, } from "./commands/SendDataToWirelessDeviceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestWirelessDeviceCommand, } from "./commands/TestWirelessDeviceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateDestinationCommand, } from "./commands/UpdateDestinationCommand";
import { UpdateLogLevelsByResourceTypesCommand, } from "./commands/UpdateLogLevelsByResourceTypesCommand";
import { UpdatePartnerAccountCommand, } from "./commands/UpdatePartnerAccountCommand";
import { UpdateWirelessDeviceCommand, } from "./commands/UpdateWirelessDeviceCommand";
import { UpdateWirelessGatewayCommand, } from "./commands/UpdateWirelessGatewayCommand";
/**
 * <p>AWS IoT Wireless API documentation</p>
 */
var IoTWireless = /** @class */ (function (_super) {
    __extends(IoTWireless, _super);
    function IoTWireless() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoTWireless.prototype.associateAwsAccountWithPartnerAccount = function (args, optionsOrCb, cb) {
        var command = new AssociateAwsAccountWithPartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.associateWirelessDeviceWithThing = function (args, optionsOrCb, cb) {
        var command = new AssociateWirelessDeviceWithThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.associateWirelessGatewayWithCertificate = function (args, optionsOrCb, cb) {
        var command = new AssociateWirelessGatewayWithCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.associateWirelessGatewayWithThing = function (args, optionsOrCb, cb) {
        var command = new AssociateWirelessGatewayWithThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createDestination = function (args, optionsOrCb, cb) {
        var command = new CreateDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createDeviceProfile = function (args, optionsOrCb, cb) {
        var command = new CreateDeviceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createServiceProfile = function (args, optionsOrCb, cb) {
        var command = new CreateServiceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createWirelessDevice = function (args, optionsOrCb, cb) {
        var command = new CreateWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createWirelessGateway = function (args, optionsOrCb, cb) {
        var command = new CreateWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createWirelessGatewayTask = function (args, optionsOrCb, cb) {
        var command = new CreateWirelessGatewayTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.createWirelessGatewayTaskDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateWirelessGatewayTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteDestination = function (args, optionsOrCb, cb) {
        var command = new DeleteDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteDeviceProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteDeviceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteServiceProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteServiceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteWirelessDevice = function (args, optionsOrCb, cb) {
        var command = new DeleteWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteWirelessGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteWirelessGatewayTask = function (args, optionsOrCb, cb) {
        var command = new DeleteWirelessGatewayTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.deleteWirelessGatewayTaskDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteWirelessGatewayTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.disassociateAwsAccountFromPartnerAccount = function (args, optionsOrCb, cb) {
        var command = new DisassociateAwsAccountFromPartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.disassociateWirelessDeviceFromThing = function (args, optionsOrCb, cb) {
        var command = new DisassociateWirelessDeviceFromThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.disassociateWirelessGatewayFromCertificate = function (args, optionsOrCb, cb) {
        var command = new DisassociateWirelessGatewayFromCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.disassociateWirelessGatewayFromThing = function (args, optionsOrCb, cb) {
        var command = new DisassociateWirelessGatewayFromThingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getDestination = function (args, optionsOrCb, cb) {
        var command = new GetDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getDeviceProfile = function (args, optionsOrCb, cb) {
        var command = new GetDeviceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getLogLevelsByResourceTypes = function (args, optionsOrCb, cb) {
        var command = new GetLogLevelsByResourceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getPartnerAccount = function (args, optionsOrCb, cb) {
        var command = new GetPartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getResourceLogLevel = function (args, optionsOrCb, cb) {
        var command = new GetResourceLogLevelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getServiceEndpoint = function (args, optionsOrCb, cb) {
        var command = new GetServiceEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getServiceProfile = function (args, optionsOrCb, cb) {
        var command = new GetServiceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessDevice = function (args, optionsOrCb, cb) {
        var command = new GetWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessDeviceStatistics = function (args, optionsOrCb, cb) {
        var command = new GetWirelessDeviceStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessGateway = function (args, optionsOrCb, cb) {
        var command = new GetWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessGatewayCertificate = function (args, optionsOrCb, cb) {
        var command = new GetWirelessGatewayCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessGatewayFirmwareInformation = function (args, optionsOrCb, cb) {
        var command = new GetWirelessGatewayFirmwareInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessGatewayStatistics = function (args, optionsOrCb, cb) {
        var command = new GetWirelessGatewayStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessGatewayTask = function (args, optionsOrCb, cb) {
        var command = new GetWirelessGatewayTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.getWirelessGatewayTaskDefinition = function (args, optionsOrCb, cb) {
        var command = new GetWirelessGatewayTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listDestinations = function (args, optionsOrCb, cb) {
        var command = new ListDestinationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listDeviceProfiles = function (args, optionsOrCb, cb) {
        var command = new ListDeviceProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listPartnerAccounts = function (args, optionsOrCb, cb) {
        var command = new ListPartnerAccountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listServiceProfiles = function (args, optionsOrCb, cb) {
        var command = new ListServiceProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listWirelessDevices = function (args, optionsOrCb, cb) {
        var command = new ListWirelessDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listWirelessGateways = function (args, optionsOrCb, cb) {
        var command = new ListWirelessGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.listWirelessGatewayTaskDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListWirelessGatewayTaskDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.putResourceLogLevel = function (args, optionsOrCb, cb) {
        var command = new PutResourceLogLevelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.resetAllResourceLogLevels = function (args, optionsOrCb, cb) {
        var command = new ResetAllResourceLogLevelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.resetResourceLogLevel = function (args, optionsOrCb, cb) {
        var command = new ResetResourceLogLevelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.sendDataToWirelessDevice = function (args, optionsOrCb, cb) {
        var command = new SendDataToWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.testWirelessDevice = function (args, optionsOrCb, cb) {
        var command = new TestWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.updateDestination = function (args, optionsOrCb, cb) {
        var command = new UpdateDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.updateLogLevelsByResourceTypes = function (args, optionsOrCb, cb) {
        var command = new UpdateLogLevelsByResourceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.updatePartnerAccount = function (args, optionsOrCb, cb) {
        var command = new UpdatePartnerAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.updateWirelessDevice = function (args, optionsOrCb, cb) {
        var command = new UpdateWirelessDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    IoTWireless.prototype.updateWirelessGateway = function (args, optionsOrCb, cb) {
        var command = new UpdateWirelessGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return IoTWireless;
}(IoTWirelessClient));
export { IoTWireless };
//# sourceMappingURL=IoTWireless.js.map