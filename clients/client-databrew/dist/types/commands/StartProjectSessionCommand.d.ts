import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { StartProjectSessionRequest, StartProjectSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartProjectSessionCommandInput extends StartProjectSessionRequest {
}
export interface StartProjectSessionCommandOutput extends StartProjectSessionResponse, __MetadataBearer {
}
/**
 * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
 *             project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartProjectSessionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartProjectSessionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new StartProjectSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartProjectSessionCommandInput} for command's `input` shape.
 * @see {@link StartProjectSessionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartProjectSessionCommand extends $Command<StartProjectSessionCommandInput, StartProjectSessionCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: StartProjectSessionCommandInput;
    constructor(input: StartProjectSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartProjectSessionCommandInput, StartProjectSessionCommandOutput>;
    private serialize;
    private deserialize;
}
