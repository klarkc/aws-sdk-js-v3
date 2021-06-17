"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoboMaker = void 0;
const RoboMakerClient_1 = require("./RoboMakerClient");
const BatchDeleteWorldsCommand_1 = require("./commands/BatchDeleteWorldsCommand");
const BatchDescribeSimulationJobCommand_1 = require("./commands/BatchDescribeSimulationJobCommand");
const CancelDeploymentJobCommand_1 = require("./commands/CancelDeploymentJobCommand");
const CancelSimulationJobBatchCommand_1 = require("./commands/CancelSimulationJobBatchCommand");
const CancelSimulationJobCommand_1 = require("./commands/CancelSimulationJobCommand");
const CancelWorldExportJobCommand_1 = require("./commands/CancelWorldExportJobCommand");
const CancelWorldGenerationJobCommand_1 = require("./commands/CancelWorldGenerationJobCommand");
const CreateDeploymentJobCommand_1 = require("./commands/CreateDeploymentJobCommand");
const CreateFleetCommand_1 = require("./commands/CreateFleetCommand");
const CreateRobotApplicationCommand_1 = require("./commands/CreateRobotApplicationCommand");
const CreateRobotApplicationVersionCommand_1 = require("./commands/CreateRobotApplicationVersionCommand");
const CreateRobotCommand_1 = require("./commands/CreateRobotCommand");
const CreateSimulationApplicationCommand_1 = require("./commands/CreateSimulationApplicationCommand");
const CreateSimulationApplicationVersionCommand_1 = require("./commands/CreateSimulationApplicationVersionCommand");
const CreateSimulationJobCommand_1 = require("./commands/CreateSimulationJobCommand");
const CreateWorldExportJobCommand_1 = require("./commands/CreateWorldExportJobCommand");
const CreateWorldGenerationJobCommand_1 = require("./commands/CreateWorldGenerationJobCommand");
const CreateWorldTemplateCommand_1 = require("./commands/CreateWorldTemplateCommand");
const DeleteFleetCommand_1 = require("./commands/DeleteFleetCommand");
const DeleteRobotApplicationCommand_1 = require("./commands/DeleteRobotApplicationCommand");
const DeleteRobotCommand_1 = require("./commands/DeleteRobotCommand");
const DeleteSimulationApplicationCommand_1 = require("./commands/DeleteSimulationApplicationCommand");
const DeleteWorldTemplateCommand_1 = require("./commands/DeleteWorldTemplateCommand");
const DeregisterRobotCommand_1 = require("./commands/DeregisterRobotCommand");
const DescribeDeploymentJobCommand_1 = require("./commands/DescribeDeploymentJobCommand");
const DescribeFleetCommand_1 = require("./commands/DescribeFleetCommand");
const DescribeRobotApplicationCommand_1 = require("./commands/DescribeRobotApplicationCommand");
const DescribeRobotCommand_1 = require("./commands/DescribeRobotCommand");
const DescribeSimulationApplicationCommand_1 = require("./commands/DescribeSimulationApplicationCommand");
const DescribeSimulationJobBatchCommand_1 = require("./commands/DescribeSimulationJobBatchCommand");
const DescribeSimulationJobCommand_1 = require("./commands/DescribeSimulationJobCommand");
const DescribeWorldCommand_1 = require("./commands/DescribeWorldCommand");
const DescribeWorldExportJobCommand_1 = require("./commands/DescribeWorldExportJobCommand");
const DescribeWorldGenerationJobCommand_1 = require("./commands/DescribeWorldGenerationJobCommand");
const DescribeWorldTemplateCommand_1 = require("./commands/DescribeWorldTemplateCommand");
const GetWorldTemplateBodyCommand_1 = require("./commands/GetWorldTemplateBodyCommand");
const ListDeploymentJobsCommand_1 = require("./commands/ListDeploymentJobsCommand");
const ListFleetsCommand_1 = require("./commands/ListFleetsCommand");
const ListRobotApplicationsCommand_1 = require("./commands/ListRobotApplicationsCommand");
const ListRobotsCommand_1 = require("./commands/ListRobotsCommand");
const ListSimulationApplicationsCommand_1 = require("./commands/ListSimulationApplicationsCommand");
const ListSimulationJobBatchesCommand_1 = require("./commands/ListSimulationJobBatchesCommand");
const ListSimulationJobsCommand_1 = require("./commands/ListSimulationJobsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWorldExportJobsCommand_1 = require("./commands/ListWorldExportJobsCommand");
const ListWorldGenerationJobsCommand_1 = require("./commands/ListWorldGenerationJobsCommand");
const ListWorldTemplatesCommand_1 = require("./commands/ListWorldTemplatesCommand");
const ListWorldsCommand_1 = require("./commands/ListWorldsCommand");
const RegisterRobotCommand_1 = require("./commands/RegisterRobotCommand");
const RestartSimulationJobCommand_1 = require("./commands/RestartSimulationJobCommand");
const StartSimulationJobBatchCommand_1 = require("./commands/StartSimulationJobBatchCommand");
const SyncDeploymentJobCommand_1 = require("./commands/SyncDeploymentJobCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateRobotApplicationCommand_1 = require("./commands/UpdateRobotApplicationCommand");
const UpdateSimulationApplicationCommand_1 = require("./commands/UpdateSimulationApplicationCommand");
const UpdateWorldTemplateCommand_1 = require("./commands/UpdateWorldTemplateCommand");
/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
class RoboMaker extends RoboMakerClient_1.RoboMakerClient {
    batchDeleteWorlds(args, optionsOrCb, cb) {
        const command = new BatchDeleteWorldsCommand_1.BatchDeleteWorldsCommand(args);
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
    batchDescribeSimulationJob(args, optionsOrCb, cb) {
        const command = new BatchDescribeSimulationJobCommand_1.BatchDescribeSimulationJobCommand(args);
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
    cancelDeploymentJob(args, optionsOrCb, cb) {
        const command = new CancelDeploymentJobCommand_1.CancelDeploymentJobCommand(args);
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
    cancelSimulationJob(args, optionsOrCb, cb) {
        const command = new CancelSimulationJobCommand_1.CancelSimulationJobCommand(args);
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
    cancelSimulationJobBatch(args, optionsOrCb, cb) {
        const command = new CancelSimulationJobBatchCommand_1.CancelSimulationJobBatchCommand(args);
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
    cancelWorldExportJob(args, optionsOrCb, cb) {
        const command = new CancelWorldExportJobCommand_1.CancelWorldExportJobCommand(args);
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
    cancelWorldGenerationJob(args, optionsOrCb, cb) {
        const command = new CancelWorldGenerationJobCommand_1.CancelWorldGenerationJobCommand(args);
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
    createDeploymentJob(args, optionsOrCb, cb) {
        const command = new CreateDeploymentJobCommand_1.CreateDeploymentJobCommand(args);
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
    createFleet(args, optionsOrCb, cb) {
        const command = new CreateFleetCommand_1.CreateFleetCommand(args);
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
    createRobot(args, optionsOrCb, cb) {
        const command = new CreateRobotCommand_1.CreateRobotCommand(args);
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
    createRobotApplication(args, optionsOrCb, cb) {
        const command = new CreateRobotApplicationCommand_1.CreateRobotApplicationCommand(args);
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
    createRobotApplicationVersion(args, optionsOrCb, cb) {
        const command = new CreateRobotApplicationVersionCommand_1.CreateRobotApplicationVersionCommand(args);
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
    createSimulationApplication(args, optionsOrCb, cb) {
        const command = new CreateSimulationApplicationCommand_1.CreateSimulationApplicationCommand(args);
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
    createSimulationApplicationVersion(args, optionsOrCb, cb) {
        const command = new CreateSimulationApplicationVersionCommand_1.CreateSimulationApplicationVersionCommand(args);
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
    createSimulationJob(args, optionsOrCb, cb) {
        const command = new CreateSimulationJobCommand_1.CreateSimulationJobCommand(args);
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
    createWorldExportJob(args, optionsOrCb, cb) {
        const command = new CreateWorldExportJobCommand_1.CreateWorldExportJobCommand(args);
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
    createWorldGenerationJob(args, optionsOrCb, cb) {
        const command = new CreateWorldGenerationJobCommand_1.CreateWorldGenerationJobCommand(args);
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
    createWorldTemplate(args, optionsOrCb, cb) {
        const command = new CreateWorldTemplateCommand_1.CreateWorldTemplateCommand(args);
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
    deleteFleet(args, optionsOrCb, cb) {
        const command = new DeleteFleetCommand_1.DeleteFleetCommand(args);
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
    deleteRobot(args, optionsOrCb, cb) {
        const command = new DeleteRobotCommand_1.DeleteRobotCommand(args);
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
    deleteRobotApplication(args, optionsOrCb, cb) {
        const command = new DeleteRobotApplicationCommand_1.DeleteRobotApplicationCommand(args);
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
    deleteSimulationApplication(args, optionsOrCb, cb) {
        const command = new DeleteSimulationApplicationCommand_1.DeleteSimulationApplicationCommand(args);
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
    deleteWorldTemplate(args, optionsOrCb, cb) {
        const command = new DeleteWorldTemplateCommand_1.DeleteWorldTemplateCommand(args);
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
    deregisterRobot(args, optionsOrCb, cb) {
        const command = new DeregisterRobotCommand_1.DeregisterRobotCommand(args);
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
    describeDeploymentJob(args, optionsOrCb, cb) {
        const command = new DescribeDeploymentJobCommand_1.DescribeDeploymentJobCommand(args);
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
    describeFleet(args, optionsOrCb, cb) {
        const command = new DescribeFleetCommand_1.DescribeFleetCommand(args);
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
    describeRobot(args, optionsOrCb, cb) {
        const command = new DescribeRobotCommand_1.DescribeRobotCommand(args);
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
    describeRobotApplication(args, optionsOrCb, cb) {
        const command = new DescribeRobotApplicationCommand_1.DescribeRobotApplicationCommand(args);
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
    describeSimulationApplication(args, optionsOrCb, cb) {
        const command = new DescribeSimulationApplicationCommand_1.DescribeSimulationApplicationCommand(args);
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
    describeSimulationJob(args, optionsOrCb, cb) {
        const command = new DescribeSimulationJobCommand_1.DescribeSimulationJobCommand(args);
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
    describeSimulationJobBatch(args, optionsOrCb, cb) {
        const command = new DescribeSimulationJobBatchCommand_1.DescribeSimulationJobBatchCommand(args);
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
    describeWorld(args, optionsOrCb, cb) {
        const command = new DescribeWorldCommand_1.DescribeWorldCommand(args);
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
    describeWorldExportJob(args, optionsOrCb, cb) {
        const command = new DescribeWorldExportJobCommand_1.DescribeWorldExportJobCommand(args);
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
    describeWorldGenerationJob(args, optionsOrCb, cb) {
        const command = new DescribeWorldGenerationJobCommand_1.DescribeWorldGenerationJobCommand(args);
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
    describeWorldTemplate(args, optionsOrCb, cb) {
        const command = new DescribeWorldTemplateCommand_1.DescribeWorldTemplateCommand(args);
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
    getWorldTemplateBody(args, optionsOrCb, cb) {
        const command = new GetWorldTemplateBodyCommand_1.GetWorldTemplateBodyCommand(args);
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
    listDeploymentJobs(args, optionsOrCb, cb) {
        const command = new ListDeploymentJobsCommand_1.ListDeploymentJobsCommand(args);
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
    listFleets(args, optionsOrCb, cb) {
        const command = new ListFleetsCommand_1.ListFleetsCommand(args);
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
    listRobotApplications(args, optionsOrCb, cb) {
        const command = new ListRobotApplicationsCommand_1.ListRobotApplicationsCommand(args);
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
    listRobots(args, optionsOrCb, cb) {
        const command = new ListRobotsCommand_1.ListRobotsCommand(args);
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
    listSimulationApplications(args, optionsOrCb, cb) {
        const command = new ListSimulationApplicationsCommand_1.ListSimulationApplicationsCommand(args);
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
    listSimulationJobBatches(args, optionsOrCb, cb) {
        const command = new ListSimulationJobBatchesCommand_1.ListSimulationJobBatchesCommand(args);
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
    listSimulationJobs(args, optionsOrCb, cb) {
        const command = new ListSimulationJobsCommand_1.ListSimulationJobsCommand(args);
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
    listWorldExportJobs(args, optionsOrCb, cb) {
        const command = new ListWorldExportJobsCommand_1.ListWorldExportJobsCommand(args);
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
    listWorldGenerationJobs(args, optionsOrCb, cb) {
        const command = new ListWorldGenerationJobsCommand_1.ListWorldGenerationJobsCommand(args);
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
    listWorlds(args, optionsOrCb, cb) {
        const command = new ListWorldsCommand_1.ListWorldsCommand(args);
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
    listWorldTemplates(args, optionsOrCb, cb) {
        const command = new ListWorldTemplatesCommand_1.ListWorldTemplatesCommand(args);
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
    registerRobot(args, optionsOrCb, cb) {
        const command = new RegisterRobotCommand_1.RegisterRobotCommand(args);
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
    restartSimulationJob(args, optionsOrCb, cb) {
        const command = new RestartSimulationJobCommand_1.RestartSimulationJobCommand(args);
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
    startSimulationJobBatch(args, optionsOrCb, cb) {
        const command = new StartSimulationJobBatchCommand_1.StartSimulationJobBatchCommand(args);
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
    syncDeploymentJob(args, optionsOrCb, cb) {
        const command = new SyncDeploymentJobCommand_1.SyncDeploymentJobCommand(args);
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
    updateRobotApplication(args, optionsOrCb, cb) {
        const command = new UpdateRobotApplicationCommand_1.UpdateRobotApplicationCommand(args);
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
    updateSimulationApplication(args, optionsOrCb, cb) {
        const command = new UpdateSimulationApplicationCommand_1.UpdateSimulationApplicationCommand(args);
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
    updateWorldTemplate(args, optionsOrCb, cb) {
        const command = new UpdateWorldTemplateCommand_1.UpdateWorldTemplateCommand(args);
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
exports.RoboMaker = RoboMaker;
//# sourceMappingURL=RoboMaker.js.map