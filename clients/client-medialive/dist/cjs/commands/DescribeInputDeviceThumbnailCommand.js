"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeInputDeviceThumbnailCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Get the latest thumbnail data for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceThumbnailCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceThumbnailCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputDeviceThumbnailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputDeviceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeInputDeviceThumbnailCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeInputDeviceThumbnailCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DescribeInputDeviceThumbnailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DescribeInputDeviceThumbnailResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeInputDeviceThumbnailCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeInputDeviceThumbnailCommand(output, context);
    }
}
exports.DescribeInputDeviceThumbnailCommand = DescribeInputDeviceThumbnailCommand;
//# sourceMappingURL=DescribeInputDeviceThumbnailCommand.js.map