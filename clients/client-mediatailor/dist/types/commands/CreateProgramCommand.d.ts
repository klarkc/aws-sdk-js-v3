import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateProgramRequest, CreateProgramResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProgramCommandInput extends CreateProgramRequest {
}
export interface CreateProgramCommandOutput extends CreateProgramResponse, __MetadataBearer {
}
/**
 * <p>Creates a program.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProgramCommandInput} for command's `input` shape.
 * @see {@link CreateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProgramCommand extends $Command<CreateProgramCommandInput, CreateProgramCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: CreateProgramCommandInput;
    constructor(input: CreateProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProgramCommandInput, CreateProgramCommandOutput>;
    private serialize;
    private deserialize;
}
