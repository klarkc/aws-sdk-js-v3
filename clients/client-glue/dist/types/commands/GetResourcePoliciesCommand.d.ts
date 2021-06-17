import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetResourcePoliciesRequest, GetResourcePoliciesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesRequest {
}
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the resource policies set on individual resources by AWS Resource Access Manager
 *       during cross-account permission grants. Also retrieves the Data Catalog resource
 *       policy.</p>
 *          <p>If you enabled metadata encryption in Data Catalog settings, and you do not have
 *       permission on the AWS KMS key, the operation can't return the Data Catalog resource
 *       policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetResourcePoliciesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcePoliciesCommand extends $Command<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetResourcePoliciesCommandInput;
    constructor(input: GetResourcePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
