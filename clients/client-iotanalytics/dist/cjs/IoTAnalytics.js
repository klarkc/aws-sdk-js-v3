"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoTAnalytics = void 0;
const IoTAnalyticsClient_1 = require("./IoTAnalyticsClient");
const BatchPutMessageCommand_1 = require("./commands/BatchPutMessageCommand");
const CancelPipelineReprocessingCommand_1 = require("./commands/CancelPipelineReprocessingCommand");
const CreateChannelCommand_1 = require("./commands/CreateChannelCommand");
const CreateDatasetCommand_1 = require("./commands/CreateDatasetCommand");
const CreateDatasetContentCommand_1 = require("./commands/CreateDatasetContentCommand");
const CreateDatastoreCommand_1 = require("./commands/CreateDatastoreCommand");
const CreatePipelineCommand_1 = require("./commands/CreatePipelineCommand");
const DeleteChannelCommand_1 = require("./commands/DeleteChannelCommand");
const DeleteDatasetCommand_1 = require("./commands/DeleteDatasetCommand");
const DeleteDatasetContentCommand_1 = require("./commands/DeleteDatasetContentCommand");
const DeleteDatastoreCommand_1 = require("./commands/DeleteDatastoreCommand");
const DeletePipelineCommand_1 = require("./commands/DeletePipelineCommand");
const DescribeChannelCommand_1 = require("./commands/DescribeChannelCommand");
const DescribeDatasetCommand_1 = require("./commands/DescribeDatasetCommand");
const DescribeDatastoreCommand_1 = require("./commands/DescribeDatastoreCommand");
const DescribeLoggingOptionsCommand_1 = require("./commands/DescribeLoggingOptionsCommand");
const DescribePipelineCommand_1 = require("./commands/DescribePipelineCommand");
const GetDatasetContentCommand_1 = require("./commands/GetDatasetContentCommand");
const ListChannelsCommand_1 = require("./commands/ListChannelsCommand");
const ListDatasetContentsCommand_1 = require("./commands/ListDatasetContentsCommand");
const ListDatasetsCommand_1 = require("./commands/ListDatasetsCommand");
const ListDatastoresCommand_1 = require("./commands/ListDatastoresCommand");
const ListPipelinesCommand_1 = require("./commands/ListPipelinesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutLoggingOptionsCommand_1 = require("./commands/PutLoggingOptionsCommand");
const RunPipelineActivityCommand_1 = require("./commands/RunPipelineActivityCommand");
const SampleChannelDataCommand_1 = require("./commands/SampleChannelDataCommand");
const StartPipelineReprocessingCommand_1 = require("./commands/StartPipelineReprocessingCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateChannelCommand_1 = require("./commands/UpdateChannelCommand");
const UpdateDatasetCommand_1 = require("./commands/UpdateDatasetCommand");
const UpdateDatastoreCommand_1 = require("./commands/UpdateDatastoreCommand");
const UpdatePipelineCommand_1 = require("./commands/UpdatePipelineCommand");
/**
 * <p>AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *     You can then query the data and run sophisticated analytics on it.  AWS IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *
 *          <p>AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
class IoTAnalytics extends IoTAnalyticsClient_1.IoTAnalyticsClient {
    batchPutMessage(args, optionsOrCb, cb) {
        const command = new BatchPutMessageCommand_1.BatchPutMessageCommand(args);
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
    cancelPipelineReprocessing(args, optionsOrCb, cb) {
        const command = new CancelPipelineReprocessingCommand_1.CancelPipelineReprocessingCommand(args);
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
    createChannel(args, optionsOrCb, cb) {
        const command = new CreateChannelCommand_1.CreateChannelCommand(args);
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
    createDataset(args, optionsOrCb, cb) {
        const command = new CreateDatasetCommand_1.CreateDatasetCommand(args);
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
    createDatasetContent(args, optionsOrCb, cb) {
        const command = new CreateDatasetContentCommand_1.CreateDatasetContentCommand(args);
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
    createDatastore(args, optionsOrCb, cb) {
        const command = new CreateDatastoreCommand_1.CreateDatastoreCommand(args);
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
    createPipeline(args, optionsOrCb, cb) {
        const command = new CreatePipelineCommand_1.CreatePipelineCommand(args);
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
    deleteChannel(args, optionsOrCb, cb) {
        const command = new DeleteChannelCommand_1.DeleteChannelCommand(args);
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
    deleteDataset(args, optionsOrCb, cb) {
        const command = new DeleteDatasetCommand_1.DeleteDatasetCommand(args);
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
    deleteDatasetContent(args, optionsOrCb, cb) {
        const command = new DeleteDatasetContentCommand_1.DeleteDatasetContentCommand(args);
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
    deleteDatastore(args, optionsOrCb, cb) {
        const command = new DeleteDatastoreCommand_1.DeleteDatastoreCommand(args);
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
    deletePipeline(args, optionsOrCb, cb) {
        const command = new DeletePipelineCommand_1.DeletePipelineCommand(args);
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
    describeChannel(args, optionsOrCb, cb) {
        const command = new DescribeChannelCommand_1.DescribeChannelCommand(args);
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
    describeDataset(args, optionsOrCb, cb) {
        const command = new DescribeDatasetCommand_1.DescribeDatasetCommand(args);
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
    describeDatastore(args, optionsOrCb, cb) {
        const command = new DescribeDatastoreCommand_1.DescribeDatastoreCommand(args);
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
    describeLoggingOptions(args, optionsOrCb, cb) {
        const command = new DescribeLoggingOptionsCommand_1.DescribeLoggingOptionsCommand(args);
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
    describePipeline(args, optionsOrCb, cb) {
        const command = new DescribePipelineCommand_1.DescribePipelineCommand(args);
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
    getDatasetContent(args, optionsOrCb, cb) {
        const command = new GetDatasetContentCommand_1.GetDatasetContentCommand(args);
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
    listChannels(args, optionsOrCb, cb) {
        const command = new ListChannelsCommand_1.ListChannelsCommand(args);
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
    listDatasetContents(args, optionsOrCb, cb) {
        const command = new ListDatasetContentsCommand_1.ListDatasetContentsCommand(args);
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
    listDatasets(args, optionsOrCb, cb) {
        const command = new ListDatasetsCommand_1.ListDatasetsCommand(args);
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
    listDatastores(args, optionsOrCb, cb) {
        const command = new ListDatastoresCommand_1.ListDatastoresCommand(args);
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
    listPipelines(args, optionsOrCb, cb) {
        const command = new ListPipelinesCommand_1.ListPipelinesCommand(args);
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
    putLoggingOptions(args, optionsOrCb, cb) {
        const command = new PutLoggingOptionsCommand_1.PutLoggingOptionsCommand(args);
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
    runPipelineActivity(args, optionsOrCb, cb) {
        const command = new RunPipelineActivityCommand_1.RunPipelineActivityCommand(args);
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
    sampleChannelData(args, optionsOrCb, cb) {
        const command = new SampleChannelDataCommand_1.SampleChannelDataCommand(args);
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
    startPipelineReprocessing(args, optionsOrCb, cb) {
        const command = new StartPipelineReprocessingCommand_1.StartPipelineReprocessingCommand(args);
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
    updateChannel(args, optionsOrCb, cb) {
        const command = new UpdateChannelCommand_1.UpdateChannelCommand(args);
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
    updateDataset(args, optionsOrCb, cb) {
        const command = new UpdateDatasetCommand_1.UpdateDatasetCommand(args);
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
    updateDatastore(args, optionsOrCb, cb) {
        const command = new UpdateDatastoreCommand_1.UpdateDatastoreCommand(args);
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
    updatePipeline(args, optionsOrCb, cb) {
        const command = new UpdatePipelineCommand_1.UpdatePipelineCommand(args);
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
exports.IoTAnalytics = IoTAnalytics;
//# sourceMappingURL=IoTAnalytics.js.map