import { __extends } from "tslib";
import { ServiceQuotasClient } from "./ServiceQuotasClient";
import { AssociateServiceQuotaTemplateCommand, } from "./commands/AssociateServiceQuotaTemplateCommand";
import { DeleteServiceQuotaIncreaseRequestFromTemplateCommand, } from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import { DisassociateServiceQuotaTemplateCommand, } from "./commands/DisassociateServiceQuotaTemplateCommand";
import { GetAWSDefaultServiceQuotaCommand, } from "./commands/GetAWSDefaultServiceQuotaCommand";
import { GetAssociationForServiceQuotaTemplateCommand, } from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import { GetRequestedServiceQuotaChangeCommand, } from "./commands/GetRequestedServiceQuotaChangeCommand";
import { GetServiceQuotaCommand, } from "./commands/GetServiceQuotaCommand";
import { GetServiceQuotaIncreaseRequestFromTemplateCommand, } from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import { ListAWSDefaultServiceQuotasCommand, } from "./commands/ListAWSDefaultServiceQuotasCommand";
import { ListRequestedServiceQuotaChangeHistoryByQuotaCommand, } from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ListRequestedServiceQuotaChangeHistoryCommand, } from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ListServiceQuotaIncreaseRequestsInTemplateCommand, } from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ListServiceQuotasCommand, } from "./commands/ListServiceQuotasCommand";
import { ListServicesCommand, } from "./commands/ListServicesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutServiceQuotaIncreaseRequestIntoTemplateCommand, } from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import { RequestServiceQuotaIncreaseCommand, } from "./commands/RequestServiceQuotaIncreaseCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <p>With Service Quotas, you can view and manage your quotas easily as your AWS workloads
 *       grow. Quotas, also referred to as limits, are the maximum number of resources that you can
 *       create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 */
var ServiceQuotas = /** @class */ (function (_super) {
    __extends(ServiceQuotas, _super);
    function ServiceQuotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceQuotas.prototype.associateServiceQuotaTemplate = function (args, optionsOrCb, cb) {
        var command = new AssociateServiceQuotaTemplateCommand(args);
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
    ServiceQuotas.prototype.deleteServiceQuotaIncreaseRequestFromTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
    ServiceQuotas.prototype.disassociateServiceQuotaTemplate = function (args, optionsOrCb, cb) {
        var command = new DisassociateServiceQuotaTemplateCommand(args);
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
    ServiceQuotas.prototype.getAssociationForServiceQuotaTemplate = function (args, optionsOrCb, cb) {
        var command = new GetAssociationForServiceQuotaTemplateCommand(args);
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
    ServiceQuotas.prototype.getAWSDefaultServiceQuota = function (args, optionsOrCb, cb) {
        var command = new GetAWSDefaultServiceQuotaCommand(args);
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
    ServiceQuotas.prototype.getRequestedServiceQuotaChange = function (args, optionsOrCb, cb) {
        var command = new GetRequestedServiceQuotaChangeCommand(args);
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
    ServiceQuotas.prototype.getServiceQuota = function (args, optionsOrCb, cb) {
        var command = new GetServiceQuotaCommand(args);
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
    ServiceQuotas.prototype.getServiceQuotaIncreaseRequestFromTemplate = function (args, optionsOrCb, cb) {
        var command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
    ServiceQuotas.prototype.listAWSDefaultServiceQuotas = function (args, optionsOrCb, cb) {
        var command = new ListAWSDefaultServiceQuotasCommand(args);
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
    ServiceQuotas.prototype.listRequestedServiceQuotaChangeHistory = function (args, optionsOrCb, cb) {
        var command = new ListRequestedServiceQuotaChangeHistoryCommand(args);
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
    ServiceQuotas.prototype.listRequestedServiceQuotaChangeHistoryByQuota = function (args, optionsOrCb, cb) {
        var command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(args);
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
    ServiceQuotas.prototype.listServiceQuotaIncreaseRequestsInTemplate = function (args, optionsOrCb, cb) {
        var command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(args);
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
    ServiceQuotas.prototype.listServiceQuotas = function (args, optionsOrCb, cb) {
        var command = new ListServiceQuotasCommand(args);
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
    ServiceQuotas.prototype.listServices = function (args, optionsOrCb, cb) {
        var command = new ListServicesCommand(args);
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
    ServiceQuotas.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ServiceQuotas.prototype.putServiceQuotaIncreaseRequestIntoTemplate = function (args, optionsOrCb, cb) {
        var command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(args);
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
    ServiceQuotas.prototype.requestServiceQuotaIncrease = function (args, optionsOrCb, cb) {
        var command = new RequestServiceQuotaIncreaseCommand(args);
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
    ServiceQuotas.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    ServiceQuotas.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    return ServiceQuotas;
}(ServiceQuotasClient));
export { ServiceQuotas };
//# sourceMappingURL=ServiceQuotas.js.map