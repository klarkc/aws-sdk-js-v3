"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartGatewayCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>).
 *          After the gateway starts, you can then make other API calls, your applications can read
 *          from or write to the gateway's storage volumes and you will be able to take snapshot
 *          backups.</p>
 *
 *          <note>
 *             <p>When you make a request, you will get a 200 OK success response immediately. However,
 *             it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
 *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *
 *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new StartGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartGatewayCommandInput} for command's `input` shape.
 * @see {@link StartGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartGatewayCommand extends smithy_client_1.Command {
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
        const clientName = "StorageGatewayClient";
        const commandName = "StartGatewayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartGatewayOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartGatewayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartGatewayCommand(output, context);
    }
}
exports.StartGatewayCommand = StartGatewayCommand;
//# sourceMappingURL=StartGatewayCommand.js.map