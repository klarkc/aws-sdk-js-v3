"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a task.</p>
 *          <p>A task includes a source location and a destination location, and a configuration
 *       that specifies how data is transferred. A task always transfers data from the source
 *       location to the destination location. The configuration specifies options such as
 *       task scheduling, bandwidth limits, etc. A task is the complete definition of a data
 *       transfer.</p>
 *          <p>When you create a task that transfers data between AWS services in different AWS Regions,
 *       one of the two locations that you specify must reside in the Region where DataSync is being
 *       used. The other location must be specified in a different Region.</p>
 *          <p>You can transfer data between commercial AWS Regions except for China, or between AWS
 *       GovCloud (US-East and US-West) Regions.</p>
 *
 *          <important>
 *             <p>When you use DataSync to copy files or objects between AWS Regions,
 *       you pay for data transfer between Regions. This is billed as data transfer OUT
 *       from your source Region to your destination Region. For more information,
 *       see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>.
 *     </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateTaskCommand extends smithy_client_1.Command {
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
        const clientName = "DataSyncClient";
        const commandName = "CreateTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateTaskResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateTaskCommand(output, context);
    }
}
exports.CreateTaskCommand = CreateTaskCommand;
//# sourceMappingURL=CreateTaskCommand.js.map