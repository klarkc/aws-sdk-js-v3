import { __extends } from "tslib";
import { RoboMakerClient } from "./RoboMakerClient";
import { BatchDeleteWorldsCommand, } from "./commands/BatchDeleteWorldsCommand";
import { BatchDescribeSimulationJobCommand, } from "./commands/BatchDescribeSimulationJobCommand";
import { CancelDeploymentJobCommand, } from "./commands/CancelDeploymentJobCommand";
import { CancelSimulationJobBatchCommand, } from "./commands/CancelSimulationJobBatchCommand";
import { CancelSimulationJobCommand, } from "./commands/CancelSimulationJobCommand";
import { CancelWorldExportJobCommand, } from "./commands/CancelWorldExportJobCommand";
import { CancelWorldGenerationJobCommand, } from "./commands/CancelWorldGenerationJobCommand";
import { CreateDeploymentJobCommand, } from "./commands/CreateDeploymentJobCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateRobotApplicationCommand, } from "./commands/CreateRobotApplicationCommand";
import { CreateRobotApplicationVersionCommand, } from "./commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommand } from "./commands/CreateRobotCommand";
import { CreateSimulationApplicationCommand, } from "./commands/CreateSimulationApplicationCommand";
import { CreateSimulationApplicationVersionCommand, } from "./commands/CreateSimulationApplicationVersionCommand";
import { CreateSimulationJobCommand, } from "./commands/CreateSimulationJobCommand";
import { CreateWorldExportJobCommand, } from "./commands/CreateWorldExportJobCommand";
import { CreateWorldGenerationJobCommand, } from "./commands/CreateWorldGenerationJobCommand";
import { CreateWorldTemplateCommand, } from "./commands/CreateWorldTemplateCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DeleteRobotApplicationCommand, } from "./commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommand } from "./commands/DeleteRobotCommand";
import { DeleteSimulationApplicationCommand, } from "./commands/DeleteSimulationApplicationCommand";
import { DeleteWorldTemplateCommand, } from "./commands/DeleteWorldTemplateCommand";
import { DeregisterRobotCommand, } from "./commands/DeregisterRobotCommand";
import { DescribeDeploymentJobCommand, } from "./commands/DescribeDeploymentJobCommand";
import { DescribeFleetCommand, } from "./commands/DescribeFleetCommand";
import { DescribeRobotApplicationCommand, } from "./commands/DescribeRobotApplicationCommand";
import { DescribeRobotCommand, } from "./commands/DescribeRobotCommand";
import { DescribeSimulationApplicationCommand, } from "./commands/DescribeSimulationApplicationCommand";
import { DescribeSimulationJobBatchCommand, } from "./commands/DescribeSimulationJobBatchCommand";
import { DescribeSimulationJobCommand, } from "./commands/DescribeSimulationJobCommand";
import { DescribeWorldCommand, } from "./commands/DescribeWorldCommand";
import { DescribeWorldExportJobCommand, } from "./commands/DescribeWorldExportJobCommand";
import { DescribeWorldGenerationJobCommand, } from "./commands/DescribeWorldGenerationJobCommand";
import { DescribeWorldTemplateCommand, } from "./commands/DescribeWorldTemplateCommand";
import { GetWorldTemplateBodyCommand, } from "./commands/GetWorldTemplateBodyCommand";
import { ListDeploymentJobsCommand, } from "./commands/ListDeploymentJobsCommand";
import { ListFleetsCommand } from "./commands/ListFleetsCommand";
import { ListRobotApplicationsCommand, } from "./commands/ListRobotApplicationsCommand";
import { ListRobotsCommand } from "./commands/ListRobotsCommand";
import { ListSimulationApplicationsCommand, } from "./commands/ListSimulationApplicationsCommand";
import { ListSimulationJobBatchesCommand, } from "./commands/ListSimulationJobBatchesCommand";
import { ListSimulationJobsCommand, } from "./commands/ListSimulationJobsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListWorldExportJobsCommand, } from "./commands/ListWorldExportJobsCommand";
import { ListWorldGenerationJobsCommand, } from "./commands/ListWorldGenerationJobsCommand";
import { ListWorldTemplatesCommand, } from "./commands/ListWorldTemplatesCommand";
import { ListWorldsCommand } from "./commands/ListWorldsCommand";
import { RegisterRobotCommand, } from "./commands/RegisterRobotCommand";
import { RestartSimulationJobCommand, } from "./commands/RestartSimulationJobCommand";
import { StartSimulationJobBatchCommand, } from "./commands/StartSimulationJobBatchCommand";
import { SyncDeploymentJobCommand, } from "./commands/SyncDeploymentJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateRobotApplicationCommand, } from "./commands/UpdateRobotApplicationCommand";
import { UpdateSimulationApplicationCommand, } from "./commands/UpdateSimulationApplicationCommand";
import { UpdateWorldTemplateCommand, } from "./commands/UpdateWorldTemplateCommand";
/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
var RoboMaker = /** @class */ (function (_super) {
    __extends(RoboMaker, _super);
    function RoboMaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoboMaker.prototype.batchDeleteWorlds = function (args, optionsOrCb, cb) {
        var command = new BatchDeleteWorldsCommand(args);
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
    RoboMaker.prototype.batchDescribeSimulationJob = function (args, optionsOrCb, cb) {
        var command = new BatchDescribeSimulationJobCommand(args);
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
    RoboMaker.prototype.cancelDeploymentJob = function (args, optionsOrCb, cb) {
        var command = new CancelDeploymentJobCommand(args);
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
    RoboMaker.prototype.cancelSimulationJob = function (args, optionsOrCb, cb) {
        var command = new CancelSimulationJobCommand(args);
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
    RoboMaker.prototype.cancelSimulationJobBatch = function (args, optionsOrCb, cb) {
        var command = new CancelSimulationJobBatchCommand(args);
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
    RoboMaker.prototype.cancelWorldExportJob = function (args, optionsOrCb, cb) {
        var command = new CancelWorldExportJobCommand(args);
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
    RoboMaker.prototype.cancelWorldGenerationJob = function (args, optionsOrCb, cb) {
        var command = new CancelWorldGenerationJobCommand(args);
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
    RoboMaker.prototype.createDeploymentJob = function (args, optionsOrCb, cb) {
        var command = new CreateDeploymentJobCommand(args);
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
    RoboMaker.prototype.createFleet = function (args, optionsOrCb, cb) {
        var command = new CreateFleetCommand(args);
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
    RoboMaker.prototype.createRobot = function (args, optionsOrCb, cb) {
        var command = new CreateRobotCommand(args);
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
    RoboMaker.prototype.createRobotApplication = function (args, optionsOrCb, cb) {
        var command = new CreateRobotApplicationCommand(args);
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
    RoboMaker.prototype.createRobotApplicationVersion = function (args, optionsOrCb, cb) {
        var command = new CreateRobotApplicationVersionCommand(args);
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
    RoboMaker.prototype.createSimulationApplication = function (args, optionsOrCb, cb) {
        var command = new CreateSimulationApplicationCommand(args);
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
    RoboMaker.prototype.createSimulationApplicationVersion = function (args, optionsOrCb, cb) {
        var command = new CreateSimulationApplicationVersionCommand(args);
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
    RoboMaker.prototype.createSimulationJob = function (args, optionsOrCb, cb) {
        var command = new CreateSimulationJobCommand(args);
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
    RoboMaker.prototype.createWorldExportJob = function (args, optionsOrCb, cb) {
        var command = new CreateWorldExportJobCommand(args);
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
    RoboMaker.prototype.createWorldGenerationJob = function (args, optionsOrCb, cb) {
        var command = new CreateWorldGenerationJobCommand(args);
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
    RoboMaker.prototype.createWorldTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateWorldTemplateCommand(args);
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
    RoboMaker.prototype.deleteFleet = function (args, optionsOrCb, cb) {
        var command = new DeleteFleetCommand(args);
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
    RoboMaker.prototype.deleteRobot = function (args, optionsOrCb, cb) {
        var command = new DeleteRobotCommand(args);
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
    RoboMaker.prototype.deleteRobotApplication = function (args, optionsOrCb, cb) {
        var command = new DeleteRobotApplicationCommand(args);
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
    RoboMaker.prototype.deleteSimulationApplication = function (args, optionsOrCb, cb) {
        var command = new DeleteSimulationApplicationCommand(args);
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
    RoboMaker.prototype.deleteWorldTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteWorldTemplateCommand(args);
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
    RoboMaker.prototype.deregisterRobot = function (args, optionsOrCb, cb) {
        var command = new DeregisterRobotCommand(args);
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
    RoboMaker.prototype.describeDeploymentJob = function (args, optionsOrCb, cb) {
        var command = new DescribeDeploymentJobCommand(args);
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
    RoboMaker.prototype.describeFleet = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetCommand(args);
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
    RoboMaker.prototype.describeRobot = function (args, optionsOrCb, cb) {
        var command = new DescribeRobotCommand(args);
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
    RoboMaker.prototype.describeRobotApplication = function (args, optionsOrCb, cb) {
        var command = new DescribeRobotApplicationCommand(args);
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
    RoboMaker.prototype.describeSimulationApplication = function (args, optionsOrCb, cb) {
        var command = new DescribeSimulationApplicationCommand(args);
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
    RoboMaker.prototype.describeSimulationJob = function (args, optionsOrCb, cb) {
        var command = new DescribeSimulationJobCommand(args);
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
    RoboMaker.prototype.describeSimulationJobBatch = function (args, optionsOrCb, cb) {
        var command = new DescribeSimulationJobBatchCommand(args);
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
    RoboMaker.prototype.describeWorld = function (args, optionsOrCb, cb) {
        var command = new DescribeWorldCommand(args);
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
    RoboMaker.prototype.describeWorldExportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeWorldExportJobCommand(args);
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
    RoboMaker.prototype.describeWorldGenerationJob = function (args, optionsOrCb, cb) {
        var command = new DescribeWorldGenerationJobCommand(args);
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
    RoboMaker.prototype.describeWorldTemplate = function (args, optionsOrCb, cb) {
        var command = new DescribeWorldTemplateCommand(args);
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
    RoboMaker.prototype.getWorldTemplateBody = function (args, optionsOrCb, cb) {
        var command = new GetWorldTemplateBodyCommand(args);
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
    RoboMaker.prototype.listDeploymentJobs = function (args, optionsOrCb, cb) {
        var command = new ListDeploymentJobsCommand(args);
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
    RoboMaker.prototype.listFleets = function (args, optionsOrCb, cb) {
        var command = new ListFleetsCommand(args);
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
    RoboMaker.prototype.listRobotApplications = function (args, optionsOrCb, cb) {
        var command = new ListRobotApplicationsCommand(args);
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
    RoboMaker.prototype.listRobots = function (args, optionsOrCb, cb) {
        var command = new ListRobotsCommand(args);
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
    RoboMaker.prototype.listSimulationApplications = function (args, optionsOrCb, cb) {
        var command = new ListSimulationApplicationsCommand(args);
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
    RoboMaker.prototype.listSimulationJobBatches = function (args, optionsOrCb, cb) {
        var command = new ListSimulationJobBatchesCommand(args);
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
    RoboMaker.prototype.listSimulationJobs = function (args, optionsOrCb, cb) {
        var command = new ListSimulationJobsCommand(args);
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
    RoboMaker.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    RoboMaker.prototype.listWorldExportJobs = function (args, optionsOrCb, cb) {
        var command = new ListWorldExportJobsCommand(args);
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
    RoboMaker.prototype.listWorldGenerationJobs = function (args, optionsOrCb, cb) {
        var command = new ListWorldGenerationJobsCommand(args);
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
    RoboMaker.prototype.listWorlds = function (args, optionsOrCb, cb) {
        var command = new ListWorldsCommand(args);
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
    RoboMaker.prototype.listWorldTemplates = function (args, optionsOrCb, cb) {
        var command = new ListWorldTemplatesCommand(args);
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
    RoboMaker.prototype.registerRobot = function (args, optionsOrCb, cb) {
        var command = new RegisterRobotCommand(args);
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
    RoboMaker.prototype.restartSimulationJob = function (args, optionsOrCb, cb) {
        var command = new RestartSimulationJobCommand(args);
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
    RoboMaker.prototype.startSimulationJobBatch = function (args, optionsOrCb, cb) {
        var command = new StartSimulationJobBatchCommand(args);
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
    RoboMaker.prototype.syncDeploymentJob = function (args, optionsOrCb, cb) {
        var command = new SyncDeploymentJobCommand(args);
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
    RoboMaker.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    RoboMaker.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    RoboMaker.prototype.updateRobotApplication = function (args, optionsOrCb, cb) {
        var command = new UpdateRobotApplicationCommand(args);
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
    RoboMaker.prototype.updateSimulationApplication = function (args, optionsOrCb, cb) {
        var command = new UpdateSimulationApplicationCommand(args);
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
    RoboMaker.prototype.updateWorldTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateWorldTemplateCommand(args);
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
    return RoboMaker;
}(RoboMakerClient));
export { RoboMaker };
//# sourceMappingURL=RoboMaker.js.map