"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceQuotas = void 0;
const ServiceQuotasClient_1 = require("./ServiceQuotasClient");
const AssociateServiceQuotaTemplateCommand_1 = require("./commands/AssociateServiceQuotaTemplateCommand");
const DeleteServiceQuotaIncreaseRequestFromTemplateCommand_1 = require("./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand");
const DisassociateServiceQuotaTemplateCommand_1 = require("./commands/DisassociateServiceQuotaTemplateCommand");
const GetAWSDefaultServiceQuotaCommand_1 = require("./commands/GetAWSDefaultServiceQuotaCommand");
const GetAssociationForServiceQuotaTemplateCommand_1 = require("./commands/GetAssociationForServiceQuotaTemplateCommand");
const GetRequestedServiceQuotaChangeCommand_1 = require("./commands/GetRequestedServiceQuotaChangeCommand");
const GetServiceQuotaCommand_1 = require("./commands/GetServiceQuotaCommand");
const GetServiceQuotaIncreaseRequestFromTemplateCommand_1 = require("./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand");
const ListAWSDefaultServiceQuotasCommand_1 = require("./commands/ListAWSDefaultServiceQuotasCommand");
const ListRequestedServiceQuotaChangeHistoryByQuotaCommand_1 = require("./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand");
const ListRequestedServiceQuotaChangeHistoryCommand_1 = require("./commands/ListRequestedServiceQuotaChangeHistoryCommand");
const ListServiceQuotaIncreaseRequestsInTemplateCommand_1 = require("./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand");
const ListServiceQuotasCommand_1 = require("./commands/ListServiceQuotasCommand");
const ListServicesCommand_1 = require("./commands/ListServicesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutServiceQuotaIncreaseRequestIntoTemplateCommand_1 = require("./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand");
const RequestServiceQuotaIncreaseCommand_1 = require("./commands/RequestServiceQuotaIncreaseCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <p>With Service Quotas, you can view and manage your quotas easily as your AWS workloads
 *       grow. Quotas, also referred to as limits, are the maximum number of resources that you can
 *       create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 */
class ServiceQuotas extends ServiceQuotasClient_1.ServiceQuotasClient {
    associateServiceQuotaTemplate(args, optionsOrCb, cb) {
        const command = new AssociateServiceQuotaTemplateCommand_1.AssociateServiceQuotaTemplateCommand(args);
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
    deleteServiceQuotaIncreaseRequestFromTemplate(args, optionsOrCb, cb) {
        const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand_1.DeleteServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
    disassociateServiceQuotaTemplate(args, optionsOrCb, cb) {
        const command = new DisassociateServiceQuotaTemplateCommand_1.DisassociateServiceQuotaTemplateCommand(args);
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
    getAssociationForServiceQuotaTemplate(args, optionsOrCb, cb) {
        const command = new GetAssociationForServiceQuotaTemplateCommand_1.GetAssociationForServiceQuotaTemplateCommand(args);
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
    getAWSDefaultServiceQuota(args, optionsOrCb, cb) {
        const command = new GetAWSDefaultServiceQuotaCommand_1.GetAWSDefaultServiceQuotaCommand(args);
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
    getRequestedServiceQuotaChange(args, optionsOrCb, cb) {
        const command = new GetRequestedServiceQuotaChangeCommand_1.GetRequestedServiceQuotaChangeCommand(args);
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
    getServiceQuota(args, optionsOrCb, cb) {
        const command = new GetServiceQuotaCommand_1.GetServiceQuotaCommand(args);
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
    getServiceQuotaIncreaseRequestFromTemplate(args, optionsOrCb, cb) {
        const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand_1.GetServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
    listAWSDefaultServiceQuotas(args, optionsOrCb, cb) {
        const command = new ListAWSDefaultServiceQuotasCommand_1.ListAWSDefaultServiceQuotasCommand(args);
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
    listRequestedServiceQuotaChangeHistory(args, optionsOrCb, cb) {
        const command = new ListRequestedServiceQuotaChangeHistoryCommand_1.ListRequestedServiceQuotaChangeHistoryCommand(args);
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
    listRequestedServiceQuotaChangeHistoryByQuota(args, optionsOrCb, cb) {
        const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand_1.ListRequestedServiceQuotaChangeHistoryByQuotaCommand(args);
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
    listServiceQuotaIncreaseRequestsInTemplate(args, optionsOrCb, cb) {
        const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand_1.ListServiceQuotaIncreaseRequestsInTemplateCommand(args);
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
    listServiceQuotas(args, optionsOrCb, cb) {
        const command = new ListServiceQuotasCommand_1.ListServiceQuotasCommand(args);
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
    listServices(args, optionsOrCb, cb) {
        const command = new ListServicesCommand_1.ListServicesCommand(args);
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
    putServiceQuotaIncreaseRequestIntoTemplate(args, optionsOrCb, cb) {
        const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand_1.PutServiceQuotaIncreaseRequestIntoTemplateCommand(args);
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
    requestServiceQuotaIncrease(args, optionsOrCb, cb) {
        const command = new RequestServiceQuotaIncreaseCommand_1.RequestServiceQuotaIncreaseCommand(args);
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
}
exports.ServiceQuotas = ServiceQuotas;
//# sourceMappingURL=ServiceQuotas.js.map