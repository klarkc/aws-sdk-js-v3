import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { UpdateProfileJobRequest, UpdateProfileJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateProfileJobCommandInput extends UpdateProfileJobRequest {
}
export interface UpdateProfileJobCommandOutput extends UpdateProfileJobResponse, __MetadataBearer {
}
/**
 * <p>Modifies the definition of an existing profile job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateProfileJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProfileJobCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProfileJobCommand extends $Command<UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: UpdateProfileJobCommandInput;
    constructor(input: UpdateProfileJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput>;
    private serialize;
    private deserialize;
}
