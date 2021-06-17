import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Locations } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocationsCommandInput {
}
export interface DescribeLocationsCommandOutput extends Locations, __MetadataBearer {
}
/**
 * <p>Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling
 *       <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLocationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLocationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocationsCommand extends $Command<DescribeLocationsCommandInput, DescribeLocationsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeLocationsCommandInput;
    constructor(input: DescribeLocationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationsCommandInput, DescribeLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
