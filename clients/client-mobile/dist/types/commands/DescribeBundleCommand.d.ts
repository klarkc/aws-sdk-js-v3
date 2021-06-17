import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { DescribeBundleRequest, DescribeBundleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBundleCommandInput extends DescribeBundleRequest {
}
export interface DescribeBundleCommandOutput extends DescribeBundleResult, __MetadataBearer {
}
/**
 * <p>
 *             Get the bundle details for the requested bundle id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DescribeBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBundleCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBundleCommand extends $Command<DescribeBundleCommandInput, DescribeBundleCommandOutput, MobileClientResolvedConfig> {
    readonly input: DescribeBundleCommandInput;
    constructor(input: DescribeBundleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MobileClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBundleCommandInput, DescribeBundleCommandOutput>;
    private serialize;
    private deserialize;
}
