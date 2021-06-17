import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { SendProjectSessionActionRequest, SendProjectSessionActionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendProjectSessionActionCommandInput extends SendProjectSessionActionRequest {
}
export interface SendProjectSessionActionCommandOutput extends SendProjectSessionActionResponse, __MetadataBearer {
}
/**
 * <p>Performs a recipe step within an interactive DataBrew session that's currently
 *             open.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, SendProjectSessionActionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, SendProjectSessionActionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new SendProjectSessionActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendProjectSessionActionCommandInput} for command's `input` shape.
 * @see {@link SendProjectSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendProjectSessionActionCommand extends $Command<SendProjectSessionActionCommandInput, SendProjectSessionActionCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: SendProjectSessionActionCommandInput;
    constructor(input: SendProjectSessionActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendProjectSessionActionCommandInput, SendProjectSessionActionCommandOutput>;
    private serialize;
    private deserialize;
}
