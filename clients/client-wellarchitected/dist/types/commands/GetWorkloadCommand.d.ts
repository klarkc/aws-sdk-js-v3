import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetWorkloadInput, GetWorkloadOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWorkloadCommandInput extends GetWorkloadInput {
}
export interface GetWorkloadCommandOutput extends GetWorkloadOutput, __MetadataBearer {
}
/**
 * <p>Get an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetWorkloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkloadCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorkloadCommand extends $Command<GetWorkloadCommandInput, GetWorkloadCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: GetWorkloadCommandInput;
    constructor(input: GetWorkloadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkloadCommandInput, GetWorkloadCommandOutput>;
    private serialize;
    private deserialize;
}
