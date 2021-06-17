import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { InitializeServiceRequest, InitializeServiceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitializeServiceCommandInput extends InitializeServiceRequest {
}
export interface InitializeServiceCommandOutput extends InitializeServiceResponse, __MetadataBearer {
}
/**
 * <p>Initialize Application Migration Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, InitializeServiceCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, InitializeServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new InitializeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitializeServiceCommandInput} for command's `input` shape.
 * @see {@link InitializeServiceCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitializeServiceCommand extends $Command<InitializeServiceCommandInput, InitializeServiceCommandOutput, MgnClientResolvedConfig> {
    readonly input: InitializeServiceCommandInput;
    constructor(input: InitializeServiceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitializeServiceCommandInput, InitializeServiceCommandOutput>;
    private serialize;
    private deserialize;
}
