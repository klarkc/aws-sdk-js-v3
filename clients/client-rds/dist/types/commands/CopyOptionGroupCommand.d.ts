import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CopyOptionGroupMessage, CopyOptionGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyOptionGroupCommandInput extends CopyOptionGroupMessage {
}
export interface CopyOptionGroupCommandOutput extends CopyOptionGroupResult, __MetadataBearer {
}
/**
 * <p>Copies the specified option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CopyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyOptionGroupCommand extends $Command<CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CopyOptionGroupCommandInput;
    constructor(input: CopyOptionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
