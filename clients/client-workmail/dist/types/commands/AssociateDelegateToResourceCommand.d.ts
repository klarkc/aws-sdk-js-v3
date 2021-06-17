import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateDelegateToResourceCommandInput extends AssociateDelegateToResourceRequest {
}
export interface AssociateDelegateToResourceCommandOutput extends AssociateDelegateToResourceResponse, __MetadataBearer {
}
/**
 * <p>Adds a member (user or group) to the resource's set of delegates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateDelegateToResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateDelegateToResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateDelegateToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDelegateToResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegateToResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateDelegateToResourceCommand extends $Command<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: AssociateDelegateToResourceCommandInput;
    constructor(input: AssociateDelegateToResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
