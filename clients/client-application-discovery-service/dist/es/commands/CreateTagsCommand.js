import { __extends } from "tslib";
import { CreateTagsRequest, CreateTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTagsCommand,
  serializeAws_json1_1CreateTagsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one or more tags for configuration items. Tags are metadata that help you
 *       categorize IT assets. This API accepts a list of multiple configuration items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, CreateTagsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, CreateTagsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTagsCommand = /** @class */ (function (_super) {
  __extends(CreateTagsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateTagsCommand(input) {
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
  CreateTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "CreateTagsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTagsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateTagsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateTagsCommand(input, context);
  };
  CreateTagsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateTagsCommand(output, context);
  };
  return CreateTagsCommand;
})($Command);
export { CreateTagsCommand };
//# sourceMappingURL=CreateTagsCommand.js.map
