import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteActivityCommandInput extends DeleteActivityInput {
}
export interface DeleteActivityCommandOutput extends DeleteActivityOutput, __MetadataBearer {
}
/**
 * <p>Deletes an activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DeleteActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActivityCommandInput} for command's `input` shape.
 * @see {@link DeleteActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteActivityCommand extends $Command<DeleteActivityCommandInput, DeleteActivityCommandOutput, SFNClientResolvedConfig> {
    readonly input: DeleteActivityCommandInput;
    constructor(input: DeleteActivityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActivityCommandInput, DeleteActivityCommandOutput>;
    private serialize;
    private deserialize;
}
