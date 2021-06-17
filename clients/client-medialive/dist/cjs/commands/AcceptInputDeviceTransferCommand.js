"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptInputDeviceTransferCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, AcceptInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, AcceptInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new AcceptInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AcceptInputDeviceTransferCommand extends smithy_client_1.Command {
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
        const clientName = "MediaLiveClient";
        const commandName = "AcceptInputDeviceTransferCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.AcceptInputDeviceTransferRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.AcceptInputDeviceTransferResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1AcceptInputDeviceTransferCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1AcceptInputDeviceTransferCommand(output, context);
    }
}
exports.AcceptInputDeviceTransferCommand = AcceptInputDeviceTransferCommand;
//# sourceMappingURL=AcceptInputDeviceTransferCommand.js.map