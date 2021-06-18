import { __extends } from "tslib";
import { UpdateStreamingDistributionRequest, UpdateStreamingDistributionResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateStreamingDistributionCommand,
  serializeAws_restXmlUpdateStreamingDistributionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a streaming distribution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStreamingDistributionCommand = /** @class */ (function (_super) {
  __extends(UpdateStreamingDistributionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateStreamingDistributionCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  UpdateStreamingDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateStreamingDistributionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStreamingDistributionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateStreamingDistributionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateStreamingDistributionCommand(input, context);
  };
  UpdateStreamingDistributionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateStreamingDistributionCommand(output, context);
  };
  return UpdateStreamingDistributionCommand;
})($Command);
export { UpdateStreamingDistributionCommand };
//# sourceMappingURL=UpdateStreamingDistributionCommand.js.map
