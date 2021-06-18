import { __extends } from "tslib";
import { CreateInvalidationRequest, CreateInvalidationResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateInvalidationCommand,
  serializeAws_restXmlCreateInvalidationCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new invalidation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateInvalidationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInvalidationCommandInput} for command's `input` shape.
 * @see {@link CreateInvalidationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInvalidationCommand = /** @class */ (function (_super) {
  __extends(CreateInvalidationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateInvalidationCommand(input) {
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
  CreateInvalidationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateInvalidationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateInvalidationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInvalidationResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateInvalidationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateInvalidationCommand(input, context);
  };
  CreateInvalidationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateInvalidationCommand(output, context);
  };
  return CreateInvalidationCommand;
})($Command);
export { CreateInvalidationCommand };
//# sourceMappingURL=CreateInvalidationCommand.js.map
