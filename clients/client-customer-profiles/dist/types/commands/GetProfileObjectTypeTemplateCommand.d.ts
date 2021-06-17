import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetProfileObjectTypeTemplateRequest, GetProfileObjectTypeTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProfileObjectTypeTemplateCommandInput extends GetProfileObjectTypeTemplateRequest {
}
export interface GetProfileObjectTypeTemplateCommandOutput extends GetProfileObjectTypeTemplateResponse, __MetadataBearer {
}
/**
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetProfileObjectTypeTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileObjectTypeTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeTemplateCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProfileObjectTypeTemplateCommand extends $Command<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: GetProfileObjectTypeTemplateCommandInput;
    constructor(input: GetProfileObjectTypeTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
