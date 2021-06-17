import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListEffectiveDeploymentsRequest, ListEffectiveDeploymentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEffectiveDeploymentsCommandInput extends ListEffectiveDeploymentsRequest {
}
export interface ListEffectiveDeploymentsCommandOutput extends ListEffectiveDeploymentsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of deployment jobs that AWS IoT Greengrass sends to AWS IoT Greengrass core
 *       devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListEffectiveDeploymentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListEffectiveDeploymentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListEffectiveDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEffectiveDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListEffectiveDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEffectiveDeploymentsCommand extends $Command<ListEffectiveDeploymentsCommandInput, ListEffectiveDeploymentsCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: ListEffectiveDeploymentsCommandInput;
    constructor(input: ListEffectiveDeploymentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEffectiveDeploymentsCommandInput, ListEffectiveDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
