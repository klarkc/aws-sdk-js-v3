"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCloudFrontOriginAccessIdentityCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Update an origin access identity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateCloudFrontOriginAccessIdentityCommand extends smithy_client_1.Command {
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
    const clientName = "CloudFrontClient";
    const commandName = "UpdateCloudFrontOriginAccessIdentityCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.UpdateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.UpdateCloudFrontOriginAccessIdentityResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(output, context);
  }
}
exports.UpdateCloudFrontOriginAccessIdentityCommand = UpdateCloudFrontOriginAccessIdentityCommand;
//# sourceMappingURL=UpdateCloudFrontOriginAccessIdentityCommand.js.map
