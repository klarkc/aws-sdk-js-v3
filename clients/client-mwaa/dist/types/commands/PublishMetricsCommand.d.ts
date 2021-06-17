import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { PublishMetricsInput, PublishMetricsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PublishMetricsCommandInput extends PublishMetricsInput {
}
export interface PublishMetricsCommandOutput extends PublishMetricsOutput, __MetadataBearer {
}
/**
 * An operation for publishing metrics from the customers to the Ops plane.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, PublishMetricsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, PublishMetricsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new PublishMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishMetricsCommandInput} for command's `input` shape.
 * @see {@link PublishMetricsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PublishMetricsCommand extends $Command<PublishMetricsCommandInput, PublishMetricsCommandOutput, MWAAClientResolvedConfig> {
    readonly input: PublishMetricsCommandInput;
    constructor(input: PublishMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MWAAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishMetricsCommandInput, PublishMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
