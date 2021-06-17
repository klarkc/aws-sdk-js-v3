"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCompatibleImagesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs)
 *       that are owned by your AWS account that would be supported for use on a Snow device.
 *       Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server
 *       14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS
 *       Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListCompatibleImagesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListCompatibleImagesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListCompatibleImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCompatibleImagesCommandInput} for command's `input` shape.
 * @see {@link ListCompatibleImagesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListCompatibleImagesCommand extends smithy_client_1.Command {
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
        const commandName = "ListCompatibleImagesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListCompatibleImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListCompatibleImagesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListCompatibleImagesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListCompatibleImagesCommand(output, context);
    }
}
exports.ListCompatibleImagesCommand = ListCompatibleImagesCommand;
//# sourceMappingURL=ListCompatibleImagesCommand.js.map