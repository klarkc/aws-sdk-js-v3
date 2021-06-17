import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSnapshotSchedulesCommandInput extends DescribeSnapshotSchedulesMessage {
}
export interface DescribeSnapshotSchedulesCommandOutput extends DescribeSnapshotSchedulesOutputMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of snapshot schedules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotSchedulesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotSchedulesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeSnapshotSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotSchedulesCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotSchedulesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSnapshotSchedulesCommand extends $Command<DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeSnapshotSchedulesCommandInput;
    constructor(input: DescribeSnapshotSchedulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput>;
    private serialize;
    private deserialize;
}
