import { __extends } from "tslib";
import { DeviceFarmClient } from "./DeviceFarmClient";
import { CreateDevicePoolCommand, } from "./commands/CreateDevicePoolCommand";
import { CreateInstanceProfileCommand, } from "./commands/CreateInstanceProfileCommand";
import { CreateNetworkProfileCommand, } from "./commands/CreateNetworkProfileCommand";
import { CreateProjectCommand, } from "./commands/CreateProjectCommand";
import { CreateRemoteAccessSessionCommand, } from "./commands/CreateRemoteAccessSessionCommand";
import { CreateTestGridProjectCommand, } from "./commands/CreateTestGridProjectCommand";
import { CreateTestGridUrlCommand, } from "./commands/CreateTestGridUrlCommand";
import { CreateUploadCommand, } from "./commands/CreateUploadCommand";
import { CreateVPCEConfigurationCommand, } from "./commands/CreateVPCEConfigurationCommand";
import { DeleteDevicePoolCommand, } from "./commands/DeleteDevicePoolCommand";
import { DeleteInstanceProfileCommand, } from "./commands/DeleteInstanceProfileCommand";
import { DeleteNetworkProfileCommand, } from "./commands/DeleteNetworkProfileCommand";
import { DeleteProjectCommand, } from "./commands/DeleteProjectCommand";
import { DeleteRemoteAccessSessionCommand, } from "./commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommand } from "./commands/DeleteRunCommand";
import { DeleteTestGridProjectCommand, } from "./commands/DeleteTestGridProjectCommand";
import { DeleteUploadCommand, } from "./commands/DeleteUploadCommand";
import { DeleteVPCEConfigurationCommand, } from "./commands/DeleteVPCEConfigurationCommand";
import { GetAccountSettingsCommand, } from "./commands/GetAccountSettingsCommand";
import { GetDeviceCommand } from "./commands/GetDeviceCommand";
import { GetDeviceInstanceCommand, } from "./commands/GetDeviceInstanceCommand";
import { GetDevicePoolCommand, } from "./commands/GetDevicePoolCommand";
import { GetDevicePoolCompatibilityCommand, } from "./commands/GetDevicePoolCompatibilityCommand";
import { GetInstanceProfileCommand, } from "./commands/GetInstanceProfileCommand";
import { GetJobCommand } from "./commands/GetJobCommand";
import { GetNetworkProfileCommand, } from "./commands/GetNetworkProfileCommand";
import { GetOfferingStatusCommand, } from "./commands/GetOfferingStatusCommand";
import { GetProjectCommand } from "./commands/GetProjectCommand";
import { GetRemoteAccessSessionCommand, } from "./commands/GetRemoteAccessSessionCommand";
import { GetRunCommand } from "./commands/GetRunCommand";
import { GetSuiteCommand } from "./commands/GetSuiteCommand";
import { GetTestCommand } from "./commands/GetTestCommand";
import { GetTestGridProjectCommand, } from "./commands/GetTestGridProjectCommand";
import { GetTestGridSessionCommand, } from "./commands/GetTestGridSessionCommand";
import { GetUploadCommand } from "./commands/GetUploadCommand";
import { GetVPCEConfigurationCommand, } from "./commands/GetVPCEConfigurationCommand";
import { InstallToRemoteAccessSessionCommand, } from "./commands/InstallToRemoteAccessSessionCommand";
import { ListArtifactsCommand, } from "./commands/ListArtifactsCommand";
import { ListDeviceInstancesCommand, } from "./commands/ListDeviceInstancesCommand";
import { ListDevicePoolsCommand, } from "./commands/ListDevicePoolsCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListInstanceProfilesCommand, } from "./commands/ListInstanceProfilesCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListNetworkProfilesCommand, } from "./commands/ListNetworkProfilesCommand";
import { ListOfferingPromotionsCommand, } from "./commands/ListOfferingPromotionsCommand";
import { ListOfferingTransactionsCommand, } from "./commands/ListOfferingTransactionsCommand";
import { ListOfferingsCommand, } from "./commands/ListOfferingsCommand";
import { ListProjectsCommand, } from "./commands/ListProjectsCommand";
import { ListRemoteAccessSessionsCommand, } from "./commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommand } from "./commands/ListRunsCommand";
import { ListSamplesCommand } from "./commands/ListSamplesCommand";
import { ListSuitesCommand } from "./commands/ListSuitesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTestGridProjectsCommand, } from "./commands/ListTestGridProjectsCommand";
import { ListTestGridSessionActionsCommand, } from "./commands/ListTestGridSessionActionsCommand";
import { ListTestGridSessionArtifactsCommand, } from "./commands/ListTestGridSessionArtifactsCommand";
import { ListTestGridSessionsCommand, } from "./commands/ListTestGridSessionsCommand";
import { ListTestsCommand } from "./commands/ListTestsCommand";
import { ListUniqueProblemsCommand, } from "./commands/ListUniqueProblemsCommand";
import { ListUploadsCommand } from "./commands/ListUploadsCommand";
import { ListVPCEConfigurationsCommand, } from "./commands/ListVPCEConfigurationsCommand";
import { PurchaseOfferingCommand, } from "./commands/PurchaseOfferingCommand";
import { RenewOfferingCommand, } from "./commands/RenewOfferingCommand";
import { ScheduleRunCommand } from "./commands/ScheduleRunCommand";
import { StopJobCommand } from "./commands/StopJobCommand";
import { StopRemoteAccessSessionCommand, } from "./commands/StopRemoteAccessSessionCommand";
import { StopRunCommand } from "./commands/StopRunCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateDeviceInstanceCommand, } from "./commands/UpdateDeviceInstanceCommand";
import { UpdateDevicePoolCommand, } from "./commands/UpdateDevicePoolCommand";
import { UpdateInstanceProfileCommand, } from "./commands/UpdateInstanceProfileCommand";
import { UpdateNetworkProfileCommand, } from "./commands/UpdateNetworkProfileCommand";
import { UpdateProjectCommand, } from "./commands/UpdateProjectCommand";
import { UpdateTestGridProjectCommand, } from "./commands/UpdateTestGridProjectCommand";
import { UpdateUploadCommand, } from "./commands/UpdateUploadCommand";
import { UpdateVPCEConfigurationCommand, } from "./commands/UpdateVPCEConfigurationCommand";
/**
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *         <ul>
 *             <li>
 *                 <p>Testing on desktop browsers</p>
 *                 <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Testing on real mobile devices</p>
 *                 <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
var DeviceFarm = /** @class */ (function (_super) {
    __extends(DeviceFarm, _super);
    function DeviceFarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceFarm.prototype.createDevicePool = function (args, optionsOrCb, cb) {
        var command = new CreateDevicePoolCommand(args);
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
    DeviceFarm.prototype.createInstanceProfile = function (args, optionsOrCb, cb) {
        var command = new CreateInstanceProfileCommand(args);
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
    DeviceFarm.prototype.createNetworkProfile = function (args, optionsOrCb, cb) {
        var command = new CreateNetworkProfileCommand(args);
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
    DeviceFarm.prototype.createProject = function (args, optionsOrCb, cb) {
        var command = new CreateProjectCommand(args);
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
    DeviceFarm.prototype.createRemoteAccessSession = function (args, optionsOrCb, cb) {
        var command = new CreateRemoteAccessSessionCommand(args);
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
    DeviceFarm.prototype.createTestGridProject = function (args, optionsOrCb, cb) {
        var command = new CreateTestGridProjectCommand(args);
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
    DeviceFarm.prototype.createTestGridUrl = function (args, optionsOrCb, cb) {
        var command = new CreateTestGridUrlCommand(args);
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
    DeviceFarm.prototype.createUpload = function (args, optionsOrCb, cb) {
        var command = new CreateUploadCommand(args);
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
    DeviceFarm.prototype.createVPCEConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateVPCEConfigurationCommand(args);
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
    DeviceFarm.prototype.deleteDevicePool = function (args, optionsOrCb, cb) {
        var command = new DeleteDevicePoolCommand(args);
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
    DeviceFarm.prototype.deleteInstanceProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteInstanceProfileCommand(args);
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
    DeviceFarm.prototype.deleteNetworkProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkProfileCommand(args);
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
    DeviceFarm.prototype.deleteProject = function (args, optionsOrCb, cb) {
        var command = new DeleteProjectCommand(args);
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
    DeviceFarm.prototype.deleteRemoteAccessSession = function (args, optionsOrCb, cb) {
        var command = new DeleteRemoteAccessSessionCommand(args);
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
    DeviceFarm.prototype.deleteRun = function (args, optionsOrCb, cb) {
        var command = new DeleteRunCommand(args);
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
    DeviceFarm.prototype.deleteTestGridProject = function (args, optionsOrCb, cb) {
        var command = new DeleteTestGridProjectCommand(args);
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
    DeviceFarm.prototype.deleteUpload = function (args, optionsOrCb, cb) {
        var command = new DeleteUploadCommand(args);
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
    DeviceFarm.prototype.deleteVPCEConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteVPCEConfigurationCommand(args);
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
    DeviceFarm.prototype.getAccountSettings = function (args, optionsOrCb, cb) {
        var command = new GetAccountSettingsCommand(args);
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
    DeviceFarm.prototype.getDevice = function (args, optionsOrCb, cb) {
        var command = new GetDeviceCommand(args);
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
    DeviceFarm.prototype.getDeviceInstance = function (args, optionsOrCb, cb) {
        var command = new GetDeviceInstanceCommand(args);
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
    DeviceFarm.prototype.getDevicePool = function (args, optionsOrCb, cb) {
        var command = new GetDevicePoolCommand(args);
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
    DeviceFarm.prototype.getDevicePoolCompatibility = function (args, optionsOrCb, cb) {
        var command = new GetDevicePoolCompatibilityCommand(args);
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
    DeviceFarm.prototype.getInstanceProfile = function (args, optionsOrCb, cb) {
        var command = new GetInstanceProfileCommand(args);
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
    DeviceFarm.prototype.getJob = function (args, optionsOrCb, cb) {
        var command = new GetJobCommand(args);
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
    DeviceFarm.prototype.getNetworkProfile = function (args, optionsOrCb, cb) {
        var command = new GetNetworkProfileCommand(args);
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
    DeviceFarm.prototype.getOfferingStatus = function (args, optionsOrCb, cb) {
        var command = new GetOfferingStatusCommand(args);
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
    DeviceFarm.prototype.getProject = function (args, optionsOrCb, cb) {
        var command = new GetProjectCommand(args);
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
    DeviceFarm.prototype.getRemoteAccessSession = function (args, optionsOrCb, cb) {
        var command = new GetRemoteAccessSessionCommand(args);
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
    DeviceFarm.prototype.getRun = function (args, optionsOrCb, cb) {
        var command = new GetRunCommand(args);
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
    DeviceFarm.prototype.getSuite = function (args, optionsOrCb, cb) {
        var command = new GetSuiteCommand(args);
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
    DeviceFarm.prototype.getTest = function (args, optionsOrCb, cb) {
        var command = new GetTestCommand(args);
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
    DeviceFarm.prototype.getTestGridProject = function (args, optionsOrCb, cb) {
        var command = new GetTestGridProjectCommand(args);
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
    DeviceFarm.prototype.getTestGridSession = function (args, optionsOrCb, cb) {
        var command = new GetTestGridSessionCommand(args);
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
    DeviceFarm.prototype.getUpload = function (args, optionsOrCb, cb) {
        var command = new GetUploadCommand(args);
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
    DeviceFarm.prototype.getVPCEConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetVPCEConfigurationCommand(args);
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
    DeviceFarm.prototype.installToRemoteAccessSession = function (args, optionsOrCb, cb) {
        var command = new InstallToRemoteAccessSessionCommand(args);
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
    DeviceFarm.prototype.listArtifacts = function (args, optionsOrCb, cb) {
        var command = new ListArtifactsCommand(args);
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
    DeviceFarm.prototype.listDeviceInstances = function (args, optionsOrCb, cb) {
        var command = new ListDeviceInstancesCommand(args);
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
    DeviceFarm.prototype.listDevicePools = function (args, optionsOrCb, cb) {
        var command = new ListDevicePoolsCommand(args);
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
    DeviceFarm.prototype.listDevices = function (args, optionsOrCb, cb) {
        var command = new ListDevicesCommand(args);
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
    DeviceFarm.prototype.listInstanceProfiles = function (args, optionsOrCb, cb) {
        var command = new ListInstanceProfilesCommand(args);
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
    DeviceFarm.prototype.listJobs = function (args, optionsOrCb, cb) {
        var command = new ListJobsCommand(args);
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
    DeviceFarm.prototype.listNetworkProfiles = function (args, optionsOrCb, cb) {
        var command = new ListNetworkProfilesCommand(args);
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
    DeviceFarm.prototype.listOfferingPromotions = function (args, optionsOrCb, cb) {
        var command = new ListOfferingPromotionsCommand(args);
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
    DeviceFarm.prototype.listOfferings = function (args, optionsOrCb, cb) {
        var command = new ListOfferingsCommand(args);
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
    DeviceFarm.prototype.listOfferingTransactions = function (args, optionsOrCb, cb) {
        var command = new ListOfferingTransactionsCommand(args);
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
    DeviceFarm.prototype.listProjects = function (args, optionsOrCb, cb) {
        var command = new ListProjectsCommand(args);
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
    DeviceFarm.prototype.listRemoteAccessSessions = function (args, optionsOrCb, cb) {
        var command = new ListRemoteAccessSessionsCommand(args);
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
    DeviceFarm.prototype.listRuns = function (args, optionsOrCb, cb) {
        var command = new ListRunsCommand(args);
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
    DeviceFarm.prototype.listSamples = function (args, optionsOrCb, cb) {
        var command = new ListSamplesCommand(args);
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
    DeviceFarm.prototype.listSuites = function (args, optionsOrCb, cb) {
        var command = new ListSuitesCommand(args);
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
    DeviceFarm.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    DeviceFarm.prototype.listTestGridProjects = function (args, optionsOrCb, cb) {
        var command = new ListTestGridProjectsCommand(args);
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
    DeviceFarm.prototype.listTestGridSessionActions = function (args, optionsOrCb, cb) {
        var command = new ListTestGridSessionActionsCommand(args);
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
    DeviceFarm.prototype.listTestGridSessionArtifacts = function (args, optionsOrCb, cb) {
        var command = new ListTestGridSessionArtifactsCommand(args);
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
    DeviceFarm.prototype.listTestGridSessions = function (args, optionsOrCb, cb) {
        var command = new ListTestGridSessionsCommand(args);
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
    DeviceFarm.prototype.listTests = function (args, optionsOrCb, cb) {
        var command = new ListTestsCommand(args);
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
    DeviceFarm.prototype.listUniqueProblems = function (args, optionsOrCb, cb) {
        var command = new ListUniqueProblemsCommand(args);
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
    DeviceFarm.prototype.listUploads = function (args, optionsOrCb, cb) {
        var command = new ListUploadsCommand(args);
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
    DeviceFarm.prototype.listVPCEConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListVPCEConfigurationsCommand(args);
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
    DeviceFarm.prototype.purchaseOffering = function (args, optionsOrCb, cb) {
        var command = new PurchaseOfferingCommand(args);
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
    DeviceFarm.prototype.renewOffering = function (args, optionsOrCb, cb) {
        var command = new RenewOfferingCommand(args);
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
    DeviceFarm.prototype.scheduleRun = function (args, optionsOrCb, cb) {
        var command = new ScheduleRunCommand(args);
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
    DeviceFarm.prototype.stopJob = function (args, optionsOrCb, cb) {
        var command = new StopJobCommand(args);
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
    DeviceFarm.prototype.stopRemoteAccessSession = function (args, optionsOrCb, cb) {
        var command = new StopRemoteAccessSessionCommand(args);
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
    DeviceFarm.prototype.stopRun = function (args, optionsOrCb, cb) {
        var command = new StopRunCommand(args);
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
    DeviceFarm.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    DeviceFarm.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    DeviceFarm.prototype.updateDeviceInstance = function (args, optionsOrCb, cb) {
        var command = new UpdateDeviceInstanceCommand(args);
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
    DeviceFarm.prototype.updateDevicePool = function (args, optionsOrCb, cb) {
        var command = new UpdateDevicePoolCommand(args);
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
    DeviceFarm.prototype.updateInstanceProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateInstanceProfileCommand(args);
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
    DeviceFarm.prototype.updateNetworkProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateNetworkProfileCommand(args);
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
    DeviceFarm.prototype.updateProject = function (args, optionsOrCb, cb) {
        var command = new UpdateProjectCommand(args);
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
    DeviceFarm.prototype.updateTestGridProject = function (args, optionsOrCb, cb) {
        var command = new UpdateTestGridProjectCommand(args);
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
    DeviceFarm.prototype.updateUpload = function (args, optionsOrCb, cb) {
        var command = new UpdateUploadCommand(args);
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
    DeviceFarm.prototype.updateVPCEConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateVPCEConfigurationCommand(args);
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
    return DeviceFarm;
}(DeviceFarmClient));
export { DeviceFarm };
//# sourceMappingURL=DeviceFarm.js.map