import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartSessionRequest, StartSessionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSessionCommandInput extends StartSessionRequest {
}
export interface StartSessionCommandOutput extends StartSessionResponse, __MetadataBearer {
}
/**
 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a
 *    URL and token that can be used to open a WebSocket connection for sending input and receiving
 *    outputs.</p>
 *          <note>
 *             <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
 *     plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install
 *      the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *             <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools
 *     for PowerShell on Windows local machines.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSessionCommand extends $Command<StartSessionCommandInput, StartSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartSessionCommandInput;
    constructor(input: StartSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSessionCommandInput, StartSessionCommandOutput>;
    private serialize;
    private deserialize;
}
