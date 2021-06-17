import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateSourceLocationRequest, CreateSourceLocationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSourceLocationCommandInput extends CreateSourceLocationRequest {
}
export interface CreateSourceLocationCommandOutput extends CreateSourceLocationResponse, __MetadataBearer {
}
/**
 * <p>Creates a source location on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link CreateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSourceLocationCommand extends $Command<CreateSourceLocationCommandInput, CreateSourceLocationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: CreateSourceLocationCommandInput;
    constructor(input: CreateSourceLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSourceLocationCommandInput, CreateSourceLocationCommandOutput>;
    private serialize;
    private deserialize;
}
