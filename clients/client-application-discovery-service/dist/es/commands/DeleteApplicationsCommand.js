import { __extends } from "tslib";
import { DeleteApplicationsRequest, DeleteApplicationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationsCommand,
  serializeAws_json1_1DeleteApplicationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a list of applications and their associations with configuration
 *       items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DeleteApplicationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DeleteApplicationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DeleteApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationsCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationsCommand = /** @class */ (function (_super) {
  __extends(DeleteApplicationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteApplicationsCommand(input) {
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
  DeleteApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DeleteApplicationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteApplicationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteApplicationsCommand(input, context);
  };
  DeleteApplicationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteApplicationsCommand(output, context);
  };
  return DeleteApplicationsCommand;
})($Command);
export { DeleteApplicationsCommand };
//# sourceMappingURL=DeleteApplicationsCommand.js.map
