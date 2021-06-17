import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { ExportServerEngineAttributeRequest, ExportServerEngineAttributeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportServerEngineAttributeCommandInput extends ExportServerEngineAttributeRequest {
}
export interface ExportServerEngineAttributeCommandOutput extends ExportServerEngineAttributeResponse, __MetadataBearer {
}
/**
 * <p>
 *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
 *       FAILED or DELETING.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, ExportServerEngineAttributeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, ExportServerEngineAttributeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new ExportServerEngineAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportServerEngineAttributeCommandInput} for command's `input` shape.
 * @see {@link ExportServerEngineAttributeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportServerEngineAttributeCommand extends $Command<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: ExportServerEngineAttributeCommandInput;
    constructor(input: ExportServerEngineAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
