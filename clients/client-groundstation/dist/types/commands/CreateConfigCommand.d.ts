import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, CreateConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConfigCommandInput extends CreateConfigRequest {
}
export interface CreateConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {
}
/**
 * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p>
 *          <p>Only one type of <code>configData</code> can be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigCommandInput} for command's `input` shape.
 * @see {@link CreateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigCommand extends $Command<CreateConfigCommandInput, CreateConfigCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CreateConfigCommandInput;
    constructor(input: CreateConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigCommandInput, CreateConfigCommandOutput>;
    private serialize;
    private deserialize;
}
