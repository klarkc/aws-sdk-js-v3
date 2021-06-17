import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { UpgradeLensReviewInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpgradeLensReviewCommandInput extends UpgradeLensReviewInput {
}
export interface UpgradeLensReviewCommandOutput extends __MetadataBearer {
}
/**
 * <p>Upgrade lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpgradeLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpgradeLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpgradeLensReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpgradeLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpgradeLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpgradeLensReviewCommand extends $Command<UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: UpgradeLensReviewCommandInput;
    constructor(input: UpgradeLensReviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput>;
    private serialize;
    private deserialize;
}
