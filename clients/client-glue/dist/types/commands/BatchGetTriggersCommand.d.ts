import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetTriggersRequest, BatchGetTriggersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetTriggersCommandInput extends BatchGetTriggersRequest {
}
export interface BatchGetTriggersCommandOutput extends BatchGetTriggersResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetTriggersCommandInput} for command's `input` shape.
 * @see {@link BatchGetTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetTriggersCommand extends $Command<BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetTriggersCommandInput;
    constructor(input: BatchGetTriggersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
