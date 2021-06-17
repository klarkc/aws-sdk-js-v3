"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Control = void 0;
const S3ControlClient_1 = require("./S3ControlClient");
const CreateAccessPointCommand_1 = require("./commands/CreateAccessPointCommand");
const CreateAccessPointForObjectLambdaCommand_1 = require("./commands/CreateAccessPointForObjectLambdaCommand");
const CreateBucketCommand_1 = require("./commands/CreateBucketCommand");
const CreateJobCommand_1 = require("./commands/CreateJobCommand");
const DeleteAccessPointCommand_1 = require("./commands/DeleteAccessPointCommand");
const DeleteAccessPointForObjectLambdaCommand_1 = require("./commands/DeleteAccessPointForObjectLambdaCommand");
const DeleteAccessPointPolicyCommand_1 = require("./commands/DeleteAccessPointPolicyCommand");
const DeleteAccessPointPolicyForObjectLambdaCommand_1 = require("./commands/DeleteAccessPointPolicyForObjectLambdaCommand");
const DeleteBucketCommand_1 = require("./commands/DeleteBucketCommand");
const DeleteBucketLifecycleConfigurationCommand_1 = require("./commands/DeleteBucketLifecycleConfigurationCommand");
const DeleteBucketPolicyCommand_1 = require("./commands/DeleteBucketPolicyCommand");
const DeleteBucketTaggingCommand_1 = require("./commands/DeleteBucketTaggingCommand");
const DeleteJobTaggingCommand_1 = require("./commands/DeleteJobTaggingCommand");
const DeletePublicAccessBlockCommand_1 = require("./commands/DeletePublicAccessBlockCommand");
const DeleteStorageLensConfigurationCommand_1 = require("./commands/DeleteStorageLensConfigurationCommand");
const DeleteStorageLensConfigurationTaggingCommand_1 = require("./commands/DeleteStorageLensConfigurationTaggingCommand");
const DescribeJobCommand_1 = require("./commands/DescribeJobCommand");
const GetAccessPointCommand_1 = require("./commands/GetAccessPointCommand");
const GetAccessPointConfigurationForObjectLambdaCommand_1 = require("./commands/GetAccessPointConfigurationForObjectLambdaCommand");
const GetAccessPointForObjectLambdaCommand_1 = require("./commands/GetAccessPointForObjectLambdaCommand");
const GetAccessPointPolicyCommand_1 = require("./commands/GetAccessPointPolicyCommand");
const GetAccessPointPolicyForObjectLambdaCommand_1 = require("./commands/GetAccessPointPolicyForObjectLambdaCommand");
const GetAccessPointPolicyStatusCommand_1 = require("./commands/GetAccessPointPolicyStatusCommand");
const GetAccessPointPolicyStatusForObjectLambdaCommand_1 = require("./commands/GetAccessPointPolicyStatusForObjectLambdaCommand");
const GetBucketCommand_1 = require("./commands/GetBucketCommand");
const GetBucketLifecycleConfigurationCommand_1 = require("./commands/GetBucketLifecycleConfigurationCommand");
const GetBucketPolicyCommand_1 = require("./commands/GetBucketPolicyCommand");
const GetBucketTaggingCommand_1 = require("./commands/GetBucketTaggingCommand");
const GetJobTaggingCommand_1 = require("./commands/GetJobTaggingCommand");
const GetPublicAccessBlockCommand_1 = require("./commands/GetPublicAccessBlockCommand");
const GetStorageLensConfigurationCommand_1 = require("./commands/GetStorageLensConfigurationCommand");
const GetStorageLensConfigurationTaggingCommand_1 = require("./commands/GetStorageLensConfigurationTaggingCommand");
const ListAccessPointsCommand_1 = require("./commands/ListAccessPointsCommand");
const ListAccessPointsForObjectLambdaCommand_1 = require("./commands/ListAccessPointsForObjectLambdaCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const ListRegionalBucketsCommand_1 = require("./commands/ListRegionalBucketsCommand");
const ListStorageLensConfigurationsCommand_1 = require("./commands/ListStorageLensConfigurationsCommand");
const PutAccessPointConfigurationForObjectLambdaCommand_1 = require("./commands/PutAccessPointConfigurationForObjectLambdaCommand");
const PutAccessPointPolicyCommand_1 = require("./commands/PutAccessPointPolicyCommand");
const PutAccessPointPolicyForObjectLambdaCommand_1 = require("./commands/PutAccessPointPolicyForObjectLambdaCommand");
const PutBucketLifecycleConfigurationCommand_1 = require("./commands/PutBucketLifecycleConfigurationCommand");
const PutBucketPolicyCommand_1 = require("./commands/PutBucketPolicyCommand");
const PutBucketTaggingCommand_1 = require("./commands/PutBucketTaggingCommand");
const PutJobTaggingCommand_1 = require("./commands/PutJobTaggingCommand");
const PutPublicAccessBlockCommand_1 = require("./commands/PutPublicAccessBlockCommand");
const PutStorageLensConfigurationCommand_1 = require("./commands/PutStorageLensConfigurationCommand");
const PutStorageLensConfigurationTaggingCommand_1 = require("./commands/PutStorageLensConfigurationTaggingCommand");
const UpdateJobPriorityCommand_1 = require("./commands/UpdateJobPriorityCommand");
const UpdateJobStatusCommand_1 = require("./commands/UpdateJobStatusCommand");
/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane actions.
 *
 *       </p>
 */
class S3Control extends S3ControlClient_1.S3ControlClient {
    createAccessPoint(args, optionsOrCb, cb) {
        const command = new CreateAccessPointCommand_1.CreateAccessPointCommand(args);
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
    createAccessPointForObjectLambda(args, optionsOrCb, cb) {
        const command = new CreateAccessPointForObjectLambdaCommand_1.CreateAccessPointForObjectLambdaCommand(args);
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
    createBucket(args, optionsOrCb, cb) {
        const command = new CreateBucketCommand_1.CreateBucketCommand(args);
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
    createJob(args, optionsOrCb, cb) {
        const command = new CreateJobCommand_1.CreateJobCommand(args);
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
    deleteAccessPoint(args, optionsOrCb, cb) {
        const command = new DeleteAccessPointCommand_1.DeleteAccessPointCommand(args);
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
    deleteAccessPointForObjectLambda(args, optionsOrCb, cb) {
        const command = new DeleteAccessPointForObjectLambdaCommand_1.DeleteAccessPointForObjectLambdaCommand(args);
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
    deleteAccessPointPolicy(args, optionsOrCb, cb) {
        const command = new DeleteAccessPointPolicyCommand_1.DeleteAccessPointPolicyCommand(args);
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
    deleteAccessPointPolicyForObjectLambda(args, optionsOrCb, cb) {
        const command = new DeleteAccessPointPolicyForObjectLambdaCommand_1.DeleteAccessPointPolicyForObjectLambdaCommand(args);
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
    deleteBucket(args, optionsOrCb, cb) {
        const command = new DeleteBucketCommand_1.DeleteBucketCommand(args);
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
    deleteBucketLifecycleConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteBucketLifecycleConfigurationCommand_1.DeleteBucketLifecycleConfigurationCommand(args);
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
    deleteBucketPolicy(args, optionsOrCb, cb) {
        const command = new DeleteBucketPolicyCommand_1.DeleteBucketPolicyCommand(args);
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
    deleteBucketTagging(args, optionsOrCb, cb) {
        const command = new DeleteBucketTaggingCommand_1.DeleteBucketTaggingCommand(args);
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
    deleteJobTagging(args, optionsOrCb, cb) {
        const command = new DeleteJobTaggingCommand_1.DeleteJobTaggingCommand(args);
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
    deletePublicAccessBlock(args, optionsOrCb, cb) {
        const command = new DeletePublicAccessBlockCommand_1.DeletePublicAccessBlockCommand(args);
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
    deleteStorageLensConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteStorageLensConfigurationCommand_1.DeleteStorageLensConfigurationCommand(args);
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
    deleteStorageLensConfigurationTagging(args, optionsOrCb, cb) {
        const command = new DeleteStorageLensConfigurationTaggingCommand_1.DeleteStorageLensConfigurationTaggingCommand(args);
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
    describeJob(args, optionsOrCb, cb) {
        const command = new DescribeJobCommand_1.DescribeJobCommand(args);
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
    getAccessPoint(args, optionsOrCb, cb) {
        const command = new GetAccessPointCommand_1.GetAccessPointCommand(args);
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
    getAccessPointConfigurationForObjectLambda(args, optionsOrCb, cb) {
        const command = new GetAccessPointConfigurationForObjectLambdaCommand_1.GetAccessPointConfigurationForObjectLambdaCommand(args);
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
    getAccessPointForObjectLambda(args, optionsOrCb, cb) {
        const command = new GetAccessPointForObjectLambdaCommand_1.GetAccessPointForObjectLambdaCommand(args);
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
    getAccessPointPolicy(args, optionsOrCb, cb) {
        const command = new GetAccessPointPolicyCommand_1.GetAccessPointPolicyCommand(args);
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
    getAccessPointPolicyForObjectLambda(args, optionsOrCb, cb) {
        const command = new GetAccessPointPolicyForObjectLambdaCommand_1.GetAccessPointPolicyForObjectLambdaCommand(args);
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
    getAccessPointPolicyStatus(args, optionsOrCb, cb) {
        const command = new GetAccessPointPolicyStatusCommand_1.GetAccessPointPolicyStatusCommand(args);
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
    getAccessPointPolicyStatusForObjectLambda(args, optionsOrCb, cb) {
        const command = new GetAccessPointPolicyStatusForObjectLambdaCommand_1.GetAccessPointPolicyStatusForObjectLambdaCommand(args);
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
    getBucket(args, optionsOrCb, cb) {
        const command = new GetBucketCommand_1.GetBucketCommand(args);
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
    getBucketLifecycleConfiguration(args, optionsOrCb, cb) {
        const command = new GetBucketLifecycleConfigurationCommand_1.GetBucketLifecycleConfigurationCommand(args);
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
    getBucketPolicy(args, optionsOrCb, cb) {
        const command = new GetBucketPolicyCommand_1.GetBucketPolicyCommand(args);
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
    getBucketTagging(args, optionsOrCb, cb) {
        const command = new GetBucketTaggingCommand_1.GetBucketTaggingCommand(args);
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
    getJobTagging(args, optionsOrCb, cb) {
        const command = new GetJobTaggingCommand_1.GetJobTaggingCommand(args);
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
    getPublicAccessBlock(args, optionsOrCb, cb) {
        const command = new GetPublicAccessBlockCommand_1.GetPublicAccessBlockCommand(args);
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
    getStorageLensConfiguration(args, optionsOrCb, cb) {
        const command = new GetStorageLensConfigurationCommand_1.GetStorageLensConfigurationCommand(args);
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
    getStorageLensConfigurationTagging(args, optionsOrCb, cb) {
        const command = new GetStorageLensConfigurationTaggingCommand_1.GetStorageLensConfigurationTaggingCommand(args);
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
    listAccessPoints(args, optionsOrCb, cb) {
        const command = new ListAccessPointsCommand_1.ListAccessPointsCommand(args);
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
    listAccessPointsForObjectLambda(args, optionsOrCb, cb) {
        const command = new ListAccessPointsForObjectLambdaCommand_1.ListAccessPointsForObjectLambdaCommand(args);
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
    listJobs(args, optionsOrCb, cb) {
        const command = new ListJobsCommand_1.ListJobsCommand(args);
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
    listRegionalBuckets(args, optionsOrCb, cb) {
        const command = new ListRegionalBucketsCommand_1.ListRegionalBucketsCommand(args);
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
    listStorageLensConfigurations(args, optionsOrCb, cb) {
        const command = new ListStorageLensConfigurationsCommand_1.ListStorageLensConfigurationsCommand(args);
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
    putAccessPointConfigurationForObjectLambda(args, optionsOrCb, cb) {
        const command = new PutAccessPointConfigurationForObjectLambdaCommand_1.PutAccessPointConfigurationForObjectLambdaCommand(args);
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
    putAccessPointPolicy(args, optionsOrCb, cb) {
        const command = new PutAccessPointPolicyCommand_1.PutAccessPointPolicyCommand(args);
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
    putAccessPointPolicyForObjectLambda(args, optionsOrCb, cb) {
        const command = new PutAccessPointPolicyForObjectLambdaCommand_1.PutAccessPointPolicyForObjectLambdaCommand(args);
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
    putBucketLifecycleConfiguration(args, optionsOrCb, cb) {
        const command = new PutBucketLifecycleConfigurationCommand_1.PutBucketLifecycleConfigurationCommand(args);
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
    putBucketPolicy(args, optionsOrCb, cb) {
        const command = new PutBucketPolicyCommand_1.PutBucketPolicyCommand(args);
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
    putBucketTagging(args, optionsOrCb, cb) {
        const command = new PutBucketTaggingCommand_1.PutBucketTaggingCommand(args);
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
    putJobTagging(args, optionsOrCb, cb) {
        const command = new PutJobTaggingCommand_1.PutJobTaggingCommand(args);
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
    putPublicAccessBlock(args, optionsOrCb, cb) {
        const command = new PutPublicAccessBlockCommand_1.PutPublicAccessBlockCommand(args);
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
    putStorageLensConfiguration(args, optionsOrCb, cb) {
        const command = new PutStorageLensConfigurationCommand_1.PutStorageLensConfigurationCommand(args);
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
    putStorageLensConfigurationTagging(args, optionsOrCb, cb) {
        const command = new PutStorageLensConfigurationTaggingCommand_1.PutStorageLensConfigurationTaggingCommand(args);
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
    updateJobPriority(args, optionsOrCb, cb) {
        const command = new UpdateJobPriorityCommand_1.UpdateJobPriorityCommand(args);
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
    updateJobStatus(args, optionsOrCb, cb) {
        const command = new UpdateJobStatusCommand_1.UpdateJobStatusCommand(args);
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
exports.S3Control = S3Control;
//# sourceMappingURL=S3Control.js.map