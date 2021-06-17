import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeProgramRequest, DescribeProgramResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProgramCommandInput extends DescribeProgramRequest {
}
export interface DescribeProgramCommandOutput extends DescribeProgramResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the properties of the requested program.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProgramCommand extends $Command<DescribeProgramCommandInput, DescribeProgramCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DescribeProgramCommandInput;
    constructor(input: DescribeProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProgramCommandInput, DescribeProgramCommandOutput>;
    private serialize;
    private deserialize;
}
