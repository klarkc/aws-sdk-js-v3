import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { InvokeScreenAutomationRequest, InvokeScreenAutomationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InvokeScreenAutomationCommandInput extends InvokeScreenAutomationRequest {
}
export interface InvokeScreenAutomationCommandOutput extends InvokeScreenAutomationResult, __MetadataBearer {
}
/**
 * <p>
 *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
 *             The API allows setting local variables, which can then be used in the automation being invoked.
 *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, InvokeScreenAutomationCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, InvokeScreenAutomationCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new InvokeScreenAutomationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeScreenAutomationCommandInput} for command's `input` shape.
 * @see {@link InvokeScreenAutomationCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InvokeScreenAutomationCommand extends $Command<InvokeScreenAutomationCommandInput, InvokeScreenAutomationCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: InvokeScreenAutomationCommandInput;
    constructor(input: InvokeScreenAutomationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InvokeScreenAutomationCommandInput, InvokeScreenAutomationCommandOutput>;
    private serialize;
    private deserialize;
}
