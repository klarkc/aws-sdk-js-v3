"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a job to import or export data between Amazon S3 and your on-premises data
 *       center. Your AWS account must have the right trust policies and permissions in place to create
 *       a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide
 *       the <code>clusterId</code> value; the other job attributes are inherited from the cluster.
 *     </p>
 *          <note>
 *             <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p>
 *             <p>The device capacity is optional.</p>
 *             <p>Availability of device types differ by AWS Region. For more
 *         information about region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&loc=4">AWS Regional Services</a>.</p>
 *          </note>
 *
 *          <p></p>
 *
 *          <p class="title">
 *             <b>AWS Snow Family device types and their capacities.</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Snow Family device type: <b>SNC1_SSD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T14</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowcone </p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Snow Family device type: <b>SNC1_HDD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T8</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowcone </p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE_S</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T98</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Storage Optimized for data transfer only </p>
 *                   </li>
 *                </ul>
 *
 *
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE_CG</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T42</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Compute Optimized with GPU</p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE_C</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T42</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Compute Optimized without GPU</p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T100</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>STANDARD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T50</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Original Snowball device</p>
 *                      <note>
 *                         <p>This device is only available in the Ningxia, Beijing, and Singapore AWS Regions. </p>
 *                      </note>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>STANDARD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T80</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Original Snowball device</p>
 *                      <note>
 *                         <p>This device is only available in the Ningxia, Beijing, and Singapore AWS Regions. </p>
 *                      </note>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateJobCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SnowballClient";
        const commandName = "CreateJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateJobResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateJobCommand(output, context);
    }
}
exports.CreateJobCommand = CreateJobCommand;
//# sourceMappingURL=CreateJobCommand.js.map