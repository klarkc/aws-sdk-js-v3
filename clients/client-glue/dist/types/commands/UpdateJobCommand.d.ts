import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateJobRequest, UpdateJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJobCommandInput extends UpdateJobRequest {
}
export interface UpdateJobCommandOutput extends UpdateJobResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJobCommand extends $Command<UpdateJobCommandInput, UpdateJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateJobCommandInput;
    constructor(input: UpdateJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobCommandInput, UpdateJobCommandOutput>;
    private serialize;
    private deserialize;
}
