import { ServiceQuotasClient } from "./ServiceQuotasClient";
import { AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput } from "./commands/AssociateServiceQuotaTemplateCommand";
import { DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput } from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import { DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput } from "./commands/DisassociateServiceQuotaTemplateCommand";
import { GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput } from "./commands/GetAWSDefaultServiceQuotaCommand";
import { GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput } from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import { GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput } from "./commands/GetRequestedServiceQuotaChangeCommand";
import { GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput } from "./commands/GetServiceQuotaCommand";
import { GetServiceQuotaIncreaseRequestFromTemplateCommandInput, GetServiceQuotaIncreaseRequestFromTemplateCommandOutput } from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import { ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput } from "./commands/ListAWSDefaultServiceQuotasCommand";
import { ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput } from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput } from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput } from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput } from "./commands/ListServiceQuotasCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput } from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import { RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput } from "./commands/RequestServiceQuotaIncreaseCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>With Service Quotas, you can view and manage your quotas easily as your AWS workloads
 *       grow. Quotas, also referred to as limits, are the maximum number of resources that you can
 *       create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 */
export declare class ServiceQuotas extends ServiceQuotasClient {
    /**
     * <p>Associates your quota request template with your organization. When a new account is
     *       created in your organization, the quota increase requests in the template are automatically
     *       applied to the account. You can add a quota increase request for any adjustable quota to your
     *       template.</p>
     */
    associateServiceQuotaTemplate(args: AssociateServiceQuotaTemplateCommandInput, options?: __HttpHandlerOptions): Promise<AssociateServiceQuotaTemplateCommandOutput>;
    associateServiceQuotaTemplate(args: AssociateServiceQuotaTemplateCommandInput, cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void): void;
    associateServiceQuotaTemplate(args: AssociateServiceQuotaTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the quota increase request for the specified quota from your quota request
     *       template.</p>
     */
    deleteServiceQuotaIncreaseRequestFromTemplate(args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    deleteServiceQuotaIncreaseRequestFromTemplate(args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
    deleteServiceQuotaIncreaseRequestFromTemplate(args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
    /**
     * <p>Disables your quota request template. After a template is disabled, the quota increase
     *       requests in the template are not applied to new accounts in your organization. Disabling a
     *       quota request template does not apply its quota increase requests.</p>
     */
    disassociateServiceQuotaTemplate(args: DisassociateServiceQuotaTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateServiceQuotaTemplateCommandOutput>;
    disassociateServiceQuotaTemplate(args: DisassociateServiceQuotaTemplateCommandInput, cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void): void;
    disassociateServiceQuotaTemplate(args: DisassociateServiceQuotaTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieves the status of the association for the quota request template.</p>
     */
    getAssociationForServiceQuotaTemplate(args: GetAssociationForServiceQuotaTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetAssociationForServiceQuotaTemplateCommandOutput>;
    getAssociationForServiceQuotaTemplate(args: GetAssociationForServiceQuotaTemplateCommandInput, cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void): void;
    getAssociationForServiceQuotaTemplate(args: GetAssociationForServiceQuotaTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieves the default value for the specified quota. The default value does not reflect
     *       any quota increases.</p>
     */
    getAWSDefaultServiceQuota(args: GetAWSDefaultServiceQuotaCommandInput, options?: __HttpHandlerOptions): Promise<GetAWSDefaultServiceQuotaCommandOutput>;
    getAWSDefaultServiceQuota(args: GetAWSDefaultServiceQuotaCommandInput, cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void): void;
    getAWSDefaultServiceQuota(args: GetAWSDefaultServiceQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified quota increase request.</p>
     */
    getRequestedServiceQuotaChange(args: GetRequestedServiceQuotaChangeCommandInput, options?: __HttpHandlerOptions): Promise<GetRequestedServiceQuotaChangeCommandOutput>;
    getRequestedServiceQuotaChange(args: GetRequestedServiceQuotaChangeCommandInput, cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void): void;
    getRequestedServiceQuotaChange(args: GetRequestedServiceQuotaChangeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void): void;
    /**
     * <p>Retrieves the applied quota value for the specified quota. For some quotas, only the
     *       default values are available. If the applied quota value is not available for a quota, the
     *       quota is not retrieved.</p>
     */
    getServiceQuota(args: GetServiceQuotaCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceQuotaCommandOutput>;
    getServiceQuota(args: GetServiceQuotaCommandInput, cb: (err: any, data?: GetServiceQuotaCommandOutput) => void): void;
    getServiceQuota(args: GetServiceQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceQuotaCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified quota increase request in your quota request
     *       template.</p>
     */
    getServiceQuotaIncreaseRequestFromTemplate(args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    getServiceQuotaIncreaseRequestFromTemplate(args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput, cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
    getServiceQuotaIncreaseRequestFromTemplate(args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
    /**
     * <p>Lists the default values for the quotas for the specified AWS service. A default value
     *       does not reflect any quota increases.</p>
     */
    listAWSDefaultServiceQuotas(args: ListAWSDefaultServiceQuotasCommandInput, options?: __HttpHandlerOptions): Promise<ListAWSDefaultServiceQuotasCommandOutput>;
    listAWSDefaultServiceQuotas(args: ListAWSDefaultServiceQuotasCommandInput, cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void): void;
    listAWSDefaultServiceQuotas(args: ListAWSDefaultServiceQuotasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void): void;
    /**
     * <p>Retrieves the quota increase requests for the specified service.</p>
     */
    listRequestedServiceQuotaChangeHistory(args: ListRequestedServiceQuotaChangeHistoryCommandInput, options?: __HttpHandlerOptions): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
    listRequestedServiceQuotaChangeHistory(args: ListRequestedServiceQuotaChangeHistoryCommandInput, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void): void;
    listRequestedServiceQuotaChangeHistory(args: ListRequestedServiceQuotaChangeHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void): void;
    /**
     * <p>Retrieves the quota increase requests for the specified quota.</p>
     */
    listRequestedServiceQuotaChangeHistoryByQuota(args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, options?: __HttpHandlerOptions): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
    listRequestedServiceQuotaChangeHistoryByQuota(args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void): void;
    listRequestedServiceQuotaChangeHistoryByQuota(args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void): void;
    /**
     * <p>Lists the quota increase requests in the specified quota request template.</p>
     */
    listServiceQuotaIncreaseRequestsInTemplate(args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
    listServiceQuotaIncreaseRequestsInTemplate(args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void): void;
    listServiceQuotaIncreaseRequestsInTemplate(args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void): void;
    /**
     * <p>Lists the applied quota values for the specified AWS service. For some quotas, only the
     *       default values are available. If the applied quota value is not available for a quota, the
     *       quota is not retrieved.</p>
     */
    listServiceQuotas(args: ListServiceQuotasCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceQuotasCommandOutput>;
    listServiceQuotas(args: ListServiceQuotasCommandInput, cb: (err: any, data?: ListServiceQuotasCommandOutput) => void): void;
    listServiceQuotas(args: ListServiceQuotasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceQuotasCommandOutput) => void): void;
    /**
     * <p>Lists the names and codes for the services integrated with Service Quotas.</p>
     */
    listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
    listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    listServices(args: ListServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags assigned to the specified applied quota.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds a quota increase request to your quota request template.</p>
     */
    putServiceQuotaIncreaseRequestIntoTemplate(args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, options?: __HttpHandlerOptions): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
    putServiceQuotaIncreaseRequestIntoTemplate(args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void): void;
    putServiceQuotaIncreaseRequestIntoTemplate(args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void): void;
    /**
     * <p>Submits a quota increase request for the specified quota.</p>
     */
    requestServiceQuotaIncrease(args: RequestServiceQuotaIncreaseCommandInput, options?: __HttpHandlerOptions): Promise<RequestServiceQuotaIncreaseCommandOutput>;
    requestServiceQuotaIncrease(args: RequestServiceQuotaIncreaseCommandInput, cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void): void;
    requestServiceQuotaIncrease(args: RequestServiceQuotaIncreaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void): void;
    /**
     * <p>Adds tags to the specified applied quota. You can include one or more tags to add to the
     *       quota.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from the specified applied quota. You can specify one or more tags to
     *       remove.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
