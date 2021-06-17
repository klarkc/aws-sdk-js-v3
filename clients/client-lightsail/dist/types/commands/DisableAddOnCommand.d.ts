import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DisableAddOnRequest, DisableAddOnResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableAddOnCommandInput extends DisableAddOnRequest {
}
export interface DisableAddOnCommandOutput extends DisableAddOnResult, __MetadataBearer {
}
/**
 * <p>Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DisableAddOnCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DisableAddOnCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DisableAddOnCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAddOnCommandInput} for command's `input` shape.
 * @see {@link DisableAddOnCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableAddOnCommand extends $Command<DisableAddOnCommandInput, DisableAddOnCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DisableAddOnCommandInput;
    constructor(input: DisableAddOnCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAddOnCommandInput, DisableAddOnCommandOutput>;
    private serialize;
    private deserialize;
}
